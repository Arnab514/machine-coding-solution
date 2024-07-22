const ParkingLot = require('./parkingLot'); // Import the ParkingLot class
const Vehicle = require('./vehicle'); // Import the Vehicle class

class ParkingLotSystem {
  constructor() {
    this.parkingLot = null; // Initialize parkingLot as null
  }

  // Method to execute commands based on user input
  executeCommand(command) {
    const parts = command.split(' '); // Split the command into parts
    const action = parts[0]; // Extract the action from the command

    switch (action) {
      case 'create_parking_lot':
        const [parkingLotId, numFloors, numSlotsPerFloor] = parts.slice(1);
        // Create a new ParkingLot instance and store it in this.parkingLot
        this.parkingLot = new ParkingLot(parkingLotId, parseInt(numFloors, 10), parseInt(numSlotsPerFloor, 10));
        console.log(`Created parking lot with ${numFloors} floors and ${numSlotsPerFloor} slots per floor`);
        break;

      case 'park_vehicle':
        if (!this.parkingLot) {
          console.log('Parking lot not created');
          return;
        }
        const [vehicleType, regNumber, color] = parts.slice(1);
        // Create a new Vehicle instance and attempt to park it
        const vehicle = new Vehicle(vehicleType, regNumber, color);
        const ticketId = this.parkingLot.parkVehicle(vehicle);
        if (ticketId) {
          console.log(`Parked vehicle. Ticket ID: ${ticketId}`);
        } else {
          console.log('Parking Lot Full');
        }
        break;

      case 'unpark_vehicle':
        if (!this.parkingLot) {
          console.log('Parking lot not created');
          return;
        }
        const ticketIdToUnpark = parts[1];
        // Attempt to unpark a vehicle based on the ticket ID
        const unparkedVehicle = this.parkingLot.unparkVehicle(ticketIdToUnpark);
        if (unparkedVehicle) {
          console.log(`Unparked vehicle with Registration Number: ${unparkedVehicle.regNumber} and Color: ${unparkedVehicle.color}`);
        } else {
          console.log('Invalid Ticket');
        }
        break;

      case 'display':
        if (!this.parkingLot) {
          console.log('Parking lot not created');
          return;
        }
        const displayType = parts[1];
        const vehicleTypeToDisplay = parts[2];
        // Display information based on the specified type
        if (displayType === 'free_count') {
          this.parkingLot.displayFreeCount(vehicleTypeToDisplay);
        } else if (displayType === 'free_slots') {
          this.parkingLot.displayFreeSlots(vehicleTypeToDisplay);
        } else if (displayType === 'occupied_slots') {
          this.parkingLot.displayOccupiedSlots(vehicleTypeToDisplay);
        }
        break;

      case 'exit':
        console.log('Exiting...');
        process.exit(0); // Exit the process
        break;

      default:
        console.log('Invalid command'); // Handle unknown commands
    }
  }
}

module.exports = ParkingLotSystem; // Export the ParkingLotSystem class
