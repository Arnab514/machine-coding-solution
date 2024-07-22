const ParkingSlot = require('./parkingSlot'); // Import the ParkingSlot class

class Floor {
  // Constructor to initialize a floor with a number and slots
  constructor(number, numSlots) {
    this.number = number; // Floor number
    this.slots = []; // Array to store parking slots
    this.initSlots(numSlots); // Initialize slots based on the number of slots
  }

  // Method to initialize slots on the floor
  initSlots(numSlots) {
    if (numSlots >= 3) { // Ensure there are enough slots to initialize
      this.slots.push(new ParkingSlot('TRUCK', 1)); // Add the first slot for TRUCK
      for (let i = 2; i <= 3; i++) {
        this.slots.push(new ParkingSlot('BIKE', i)); // Add slots for BIKE
      }
      for (let i = 4; i <= numSlots; i++) {
        this.slots.push(new ParkingSlot('CAR', i)); // Add remaining slots for CAR
      }
    }
  }

  // Method to get all free slots for a specific vehicle type
  getFreeSlots(vehicleType) {
    return this.slots.filter(slot => slot.type === vehicleType && !slot.isOccupied);
  }

  // Method to get all occupied slots for a specific vehicle type
  getOccupiedSlots(vehicleType) {
    return this.slots.filter(slot => slot.type === vehicleType && slot.isOccupied);
  }
}

module.exports = Floor; // Export the Floor class
