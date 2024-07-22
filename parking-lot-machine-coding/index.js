const readline = require('readline'); // Import readline module for CLI input/output
const ParkingLotSystem = require('./lib/parkingLotSystem'); // Import the ParkingLotSystem class

const rl = readline.createInterface({
  input: process.stdin,  // Standard input stream (keyboard)
  output: process.stdout // Standard output stream (console)
});

const parkingLotSystem = new ParkingLotSystem(); // Create an instance of ParkingLotSystem

rl.on('line', (input) => { // Listen for 'line' events from the input
  parkingLotSystem.executeCommand(input); // Pass the input to the ParkingLotSystem for processing
});
