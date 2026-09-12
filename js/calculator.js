/**
 * Limousine & Chauffeur Fare Calculation Engine
 */
export function calculateFare({ vehicleRate, hours = 3, serviceType = 'hourly', addOns = [] }) {
  const numHours = Math.max(1, Number(hours) || 3);
  let baseFare = vehicleRate * numHours;
  
  let serviceFee = 0;
  if (serviceType === 'lax-airport') {
    serviceFee = 45; // LAX Port Authority terminal access & staging fee
  } else if (serviceType === 'red-carpet') {
    serviceFee = 60; // Event staging permit
  }

  const addOnPricing = {
    'champagne': { price: 140, name: 'Dom Pérignon Vintage & Crystal Flutes' },
    'red-carpet': { price: 75, name: 'VIP Red Carpet Rollout Arrival' },
    'security': { price: 350, name: 'Certified Armed Chauffeur Escort' },
    'wifi': { price: 30, name: 'Unlimited Onboard 5G Wi-Fi Hotspot' }
  };

  let addOnsTotal = 0;
  const selectedAddOns = [];

  addOns.forEach(key => {
    if (addOnPricing[key]) {
      addOnsTotal += addOnPricing[key].price;
      selectedAddOns.push({
        id: key,
        name: addOnPricing[key].name,
        price: addOnPricing[key].price
      });
    }
  });

  const subtotal = baseFare + serviceFee + addOnsTotal;
  const gratuity = Math.round((baseFare * 0.20) * 100) / 100; // 20% California Chauffeur Gratuity
  const total = Math.round((subtotal + gratuity) * 100) / 100;

  return {
    hours: numHours,
    vehicleRate,
    baseFare,
    serviceFee,
    addOnsTotal,
    selectedAddOns,
    subtotal,
    gratuity,
    total
  };
}
