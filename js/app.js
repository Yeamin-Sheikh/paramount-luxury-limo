import { fleetData, clientReviews } from './fleet.js';
import { calculateFare } from './calculator.js';
import { ReservationManager } from './reservation.js';

document.addEventListener('DOMContentLoaded', () => {
  const reservationManager = new ReservationManager();

  const fleetContainer = document.getElementById('fleet-grid');
  const reviewsContainer = document.getElementById('reviews-grid');
  const calcForm = document.getElementById('calc-form');
  const modalOverlay = document.getElementById('modal-overlay');
  const bookingModal = document.getElementById('booking-modal');
  const interiorModal = document.getElementById('interior-modal');
  const bookingForm = document.getElementById('booking-form');

  // Render Fleet
  if (fleetContainer) {
    fleetContainer.innerHTML = fleetData.map(vehicle => `
      <div class="fleet-card" data-id="${vehicle.id}">
        <div class="fleet-img-wrap" style="background-image: url('assets/images/${vehicle.image}');">
          <span class="fleet-badge">${vehicle.badge}</span>
        </div>
        <div class="fleet-body">
          <div class="fleet-category">${vehicle.category}</div>
          <h3 class="fleet-name">${vehicle.name}</h3>
          
          <div class="fleet-specs-row">
            <div class="fleet-spec">
              <svg class="icon"><use href="#icon-users"></use></svg>
              <span>Up to ${vehicle.passengers} Guests</span>
            </div>
            <div class="fleet-spec">
              <svg class="icon"><use href="#icon-luggage"></use></svg>
              <span>${vehicle.luggage} Bags</span>
            </div>
          </div>

          <ul class="fleet-features">
            ${vehicle.features.map(f => `
              <li>
                <svg class="icon"><use href="#icon-check"></use></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <div class="fleet-footer">
            <div>
              <span class="fleet-rate">$${vehicle.hourlyRate}</span>
              <span class="rate-sub">per hour (${vehicle.minHours}h minimum)</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn-outline-gold view-tour-btn" data-id="${vehicle.id}" style="padding: 0.55rem 0.9rem; font-size: 0.85rem;">
                360&deg; Tour
              </button>
              <button class="btn-gold book-vehicle-btn" data-id="${vehicle.id}" data-name="${vehicle.name}" data-rate="${vehicle.hourlyRate}">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Reviews
  if (reviewsContainer) {
    reviewsContainer.innerHTML = clientReviews.map(rev => `
      <div style="background: #141417; border: 1px solid #27272A; border-radius: 12px; padding: 2rem;">
        <div style="display: flex; gap: 0.25rem; color: #F59E0B; margin-bottom: 1rem;">
          ${Array(rev.rating).fill('<svg class="icon" style="width:18px;height:18px;"><use href="#icon-star"></use></svg>').join('')}
        </div>
        <p style="font-size: 0.95rem; color: #D4D4D8; font-style: italic; margin-bottom: 1.25rem; line-height: 1.6;">
          "${rev.comment}"
        </p>
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1rem; color: #FAFAFA;">${rev.client}</h4>
          <span style="font-size: 0.8rem; color: #A1A1AA;">${rev.role} &bull; ${rev.date}</span>
        </div>
      </div>
    `).join('');
  }

  // Populate Vehicle Options in Calculator
  const vehicleSelect = document.getElementById('calc-vehicle');
  if (vehicleSelect) {
    vehicleSelect.innerHTML = fleetData.map(v => `
      <option value="${v.hourlyRate}">${v.name} ($${v.hourlyRate}/hr)</option>
    `).join('');
  }

  // Fare Calculation Function
  function updateFare() {
    const rate = Number(document.getElementById('calc-vehicle')?.value || 350);
    const hours = Number(document.getElementById('calc-hours')?.value || 3);
    const serviceType = document.getElementById('calc-service-type')?.value || 'hourly';

    const addOns = [];
    document.querySelectorAll('.addon-checkbox:checked').forEach(cb => {
      addOns.push(cb.value);
    });

    const fare = calculateFare({ vehicleRate: rate, hours, serviceType, addOns });

    const baseFareEl = document.getElementById('fare-base');
    const serviceFeeEl = document.getElementById('fare-service');
    const addOnsEl = document.getElementById('fare-addons');
    const gratuityEl = document.getElementById('fare-gratuity');
    const totalEl = document.getElementById('fare-total');

    if (baseFareEl) baseFareEl.textContent = `$${fare.baseFare.toFixed(2)}`;
    if (serviceFeeEl) serviceFeeEl.textContent = `$${fare.serviceFee.toFixed(2)}`;
    if (addOnsEl) addOnsEl.textContent = `$${fare.addOnsTotal.toFixed(2)}`;
    if (gratuityEl) gratuityEl.textContent = `$${fare.gratuity.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${fare.total.toFixed(2)}`;
  }

  calcForm?.addEventListener('input', updateFare);
  updateFare();

  // Toast Notification
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #18181B;
      color: #FCD34D;
      border: 1px solid #D97706;
      border-radius: 8px;
      padding: 14px 22px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
      z-index: 9999;
      font-weight: 600;
      font-size: 0.9rem;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }

  // Modals Open/Close
  function closeModal() {
    modalOverlay?.classList.remove('open');
    bookingModal?.classList.remove('open');
    interiorModal?.classList.remove('open');
  }

  document.querySelectorAll('.modal-close-btn, #modal-overlay').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  // Tour button
  document.addEventListener('click', (e) => {
    const tourBtn = e.target.closest('.view-tour-btn');
    if (tourBtn) {
      modalOverlay?.classList.add('open');
      interiorModal?.classList.add('open');
    }

    const bookBtn = e.target.closest('.book-vehicle-btn');
    if (bookBtn) {
      const vName = bookBtn.getAttribute('data-name');
      const inputEl = document.getElementById('modal-vehicle-name');
      if (inputEl) inputEl.value = vName;
      modalOverlay?.classList.add('open');
      bookingModal?.classList.add('open');
    }
  });

  // Booking Form Submission
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(bookingForm);
    const reservation = reservationManager.createReservation({
      vehicle: formData.get('vehicle'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      date: formData.get('date'),
      pickupLocation: formData.get('pickupLocation'),
      dropoffLocation: formData.get('dropoffLocation')
    });

    closeModal();
    showToast(`Chauffeured Reservation Confirmed! Code: ${reservation.id}`);
  });

  // Right-Click Context Menu Implementation (User Rule Compliance)
  const contextMenu = document.getElementById('custom-context-menu');
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (!contextMenu) return;
    contextMenu.style.left = `${Math.min(e.clientX, window.innerWidth - 180)}px`;
    contextMenu.style.top = `${Math.min(e.clientY, window.innerHeight - 180)}px`;
    contextMenu.classList.add('open');
  });

  window.addEventListener('click', () => {
    contextMenu?.classList.remove('open');
  });

  contextMenu?.addEventListener('click', async (e) => {
    const item = e.target.closest('.context-menu-item');
    if (!item) return;
    const action = item.getAttribute('data-action');
    try {
      if (action === 'copy') {
        const sel = window.getSelection()?.toString();
        if (sel) await navigator.clipboard.writeText(sel);
      } else if (action === 'paste') {
        const text = await navigator.clipboard.readText();
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
          active.value += text;
        }
      } else if (action === 'cut') {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
          await navigator.clipboard.writeText(active.value);
          active.value = '';
        }
      } else if (action === 'selectall') {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
          active.select();
        } else {
          document.execCommand('selectAll');
        }
      }
    } catch {
      // Fallback
    }
    contextMenu.classList.remove('open');
  });
});
