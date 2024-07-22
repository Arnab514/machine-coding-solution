class Ticket {
  // Initializes a ticket with parking lot ID, floor number, slot number, and vehicle information
  constructor(parkingLotId, floorNo, slotNo, vehicle) {
    // Creates a ticket ID using the provided parameters
    this.ticketId = `${parkingLotId}_${floorNo}_${slotNo}`;
    this.vehicle = vehicle; // Stores the vehicle information associated with this ticket
  }
}

module.exports = Ticket; // Export the class
