class ParkingSlot {
  // Initializes a parking slot with its type, number, and status
  constructor(type, number) {
    this.type = type; // Vehicle type this slot accommodates (e.g., 'CAR', 'BIKE', 'TRUCK')
    this.number = number; // Slot number on the floor
    this.isOccupied = false; // Slot occupancy status
    this.vehicle = null; // Vehicle parked in this slot
  }

  // Parks a vehicle in this slot
  park(vehicle) {
    // Check if slot is available and vehicle type matches
    if (this.isOccupied || this.type !== vehicle.type) {
      return false; // Slot cannot accommodate the vehicle
    }
    this.vehicle = vehicle; // Assign vehicle to the slot
    this.isOccupied = true; // Mark the slot as occupied
    return true; // Parking successful
  }

  // Removes a vehicle from this slot
  unpark() {
    // Check if slot is occupied
    if (!this.isOccupied) {
      return null; // No vehicle to remove
    }
    const vehicle = this.vehicle; // Get the vehicle
    this.vehicle = null; // Clear the slot
    this.isOccupied = false; // Mark the slot as free
    return vehicle; // Return the removed vehicle
  }
}

module.exports = ParkingSlot; // Export the class
