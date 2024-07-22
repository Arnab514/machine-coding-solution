class Vehicle {
  // Initializes a vehicle with type, registration number, and color
  constructor(type, regNumber, color) {
    this.type = type; // Type of the vehicle (e.g., 'CAR', 'BIKE', 'TRUCK')
    this.regNumber = regNumber; // Registration number of the vehicle
    this.color = color; // Color of the vehicle
  }
}

module.exports = Vehicle; // Export the class
