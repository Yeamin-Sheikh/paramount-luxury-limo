/**
 * Reservation Manager for Paramount Limousine Service
 */
export class ReservationManager {
  constructor(storageKey = 'paramount_limo_reservations') {
    this.storageKey = storageKey;
    this.reservations = this.loadReservations();
  }

  loadReservations() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveReservations() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.reservations));
    } catch (e) {
      console.warn('Unable to persist reservation', e);
    }
  }

  createReservation(data) {
    const confirmationId = 'PLX-LA-' + Math.floor(10000 + Math.random() * 90000);
    const reservation = {
      id: confirmationId,
      createdAt: new Date().toISOString(),
      ...data,
      status: 'Confirmed'
    };

    this.reservations.push(reservation);
    this.saveReservations();
    return reservation;
  }
}
