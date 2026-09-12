import assert from 'node:assert';
import { fleetData } from '../js/fleet.js';
import { calculateFare } from '../js/calculator.js';
import { ReservationManager } from '../js/reservation.js';

console.log('--- Running Paramount Limousine Service Tests ---');

// Mock localStorage
global.localStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

// Test 1: Fleet verification
assert.strictEqual(fleetData.length, 5, 'Should have 5 luxury vehicles');
const rolls = fleetData.find(v => v.id === 'rolls-phantom');
assert.ok(rolls, 'Rolls-Royce Phantom should exist');
assert.strictEqual(rolls.hourlyRate, 350);
console.log('✓ Fleet data schema verified');

// Test 2: Standard Hourly Fare
// 3 hours in Rolls-Royce: base = 350 * 3 = 1050
// No service fee. Add-ons = 0.
// Gratuity = 20% of 1050 = 210
// Total = 1050 + 210 = 1260
const fare1 = calculateFare({ vehicleRate: 350, hours: 3, serviceType: 'hourly', addOns: [] });
assert.strictEqual(fare1.baseFare, 1050);
assert.strictEqual(fare1.serviceFee, 0);
assert.strictEqual(fare1.addOnsTotal, 0);
assert.strictEqual(fare1.gratuity, 210);
assert.strictEqual(fare1.total, 1260);
console.log('✓ Standard hourly fare calculation verified');

// Test 3: LAX Airport Transfer with Champagne & Red Carpet
// Maybach ($220/hr) * 2 hrs = 440
// LAX service fee = 45
// Add-ons: champagne (140) + red-carpet (75) = 215
// Subtotal = 440 + 45 + 215 = 700
// Gratuity: 20% of base (440) = 88
// Total = 700 + 88 = 788
const fare2 = calculateFare({ 
  vehicleRate: 220, 
  hours: 2, 
  serviceType: 'lax-airport', 
  addOns: ['champagne', 'red-carpet'] 
});
assert.strictEqual(fare2.baseFare, 440);
assert.strictEqual(fare2.serviceFee, 45);
assert.strictEqual(fare2.addOnsTotal, 215);
assert.strictEqual(fare2.subtotal, 700);
assert.strictEqual(fare2.gratuity, 88);
assert.strictEqual(fare2.total, 788);
console.log('✓ LAX airport transfer with luxury amenities calculation verified');

// Test 4: Reservation Manager
const mgr = new ReservationManager('test_limo_suite');
const res = mgr.createReservation({
  vehicle: 'Rolls-Royce Phantom VIII',
  name: 'Lady Elizabeth',
  phone: '(310) 555-0100',
  date: '2026-09-20'
});

assert.ok(res.id.startsWith('PLX-LA-'), 'Reservation ID should follow PLX-LA- prefix');
assert.strictEqual(res.name, 'Lady Elizabeth');
assert.strictEqual(mgr.reservations.length, 1);
console.log('✓ Reservation manager lifecycle verified');

console.log('\nAll Paramount Limousine Service tests passed successfully! (4/4)');
