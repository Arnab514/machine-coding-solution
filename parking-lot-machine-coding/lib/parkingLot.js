const Floor = require('./floor'); // Import the Floor class
const Ticket = require('./ticket'); // Import the Ticket class

class ParkingLot {
  // Constructor to initialize the parking lot with floors and slots
  constructor(id, numFloors, numSlotsPerFloor) {
    this.id = id; // Unique identifier for the parking lot
    this.floors = []; // Array to store the floors
    for (let i = 1; i <= numFloors; i++) {
      // Create and add Floor instances to the floors array
      this.floors.push(new Floor(i, numSlotsPerFloor));
    }
    this.tickets = new Map(); // Map to store tickets with ticketId as key
  }

  // Method to park a vehicle
  parkVehicle(vehicle) {
    for (let floor of this.floors) {
      const freeSlots = floor.getFreeSlots(vehicle.type); // Get free slots for the vehicle type
      if (freeSlots.length > 0) {
        const slot = freeSlots[0]; // Choose the first available slot
        if (slot.park(vehicle)) { // Attempt to park the vehicle
          const ticket = new Ticket(this.id, floor.number, slot.number, vehicle); // Create a new ticket
          this.tickets.set(ticket.ticketId, ticket); // Store the ticket in the map
          return ticket.ticketId; // Return the ticket ID
        }
      }
    }
    return null; // Return null if no slots are available
  }

  // Method to unpark a vehicle based on ticket ID
  unparkVehicle(ticketId) {
    const ticket = this.tickets.get(ticketId); // Retrieve the ticket from the map
    if (!ticket) {
      return null; // Return null if the ticket is invalid
    }
    const { floorNo, slotNo } = this.parseTicketId(ticketId); // Parse ticket ID to get floor and slot numbers
    const floor = this.floors[floorNo - 1]; // Get the corresponding floor
    const slot = floor.slots[slotNo - 1]; // Get the corresponding slot
    const vehicle = slot.unpark(); // Unpark the vehicle from the slot
    if (vehicle) {
      this.tickets.delete(ticketId); // Remove the ticket from the map
      return vehicle; // Return the unparked vehicle
    }
    return null; // Return null if no vehicle was unparked
  }

  // Helper method to parse the ticket ID into floor and slot numbers
  parseTicketId(ticketId) {
    const parts = ticketId.split('_'); // Split the ticket ID by '_'
    return {
      floorNo: parseInt(parts[1], 10), // Extract and convert floor number
      slotNo: parseInt(parts[2], 10) // Extract and convert slot number
    };
  }

  // Method to display the count of free slots for a specific vehicle type
  displayFreeCount(vehicleType) {
    this.floors.forEach(floor => {
      const freeSlots = floor.getFreeSlots(vehicleType).length; // Get count of free slots
      console.log(`No. of free slots for ${vehicleType} on Floor ${floor.number}: ${freeSlots}`);
    });
  }

  // Method to display the numbers of free slots for a specific vehicle type
  displayFreeSlots(vehicleType) {
    this.floors.forEach(floor => {
      const freeSlots = floor.getFreeSlots(vehicleType).map(slot => slot.number).join(','); // Get slot numbers
      console.log(`Free slots for ${vehicleType} on Floor ${floor.number}: ${freeSlots}`);
    });
  }

  // Method to display the numbers of occupied slots for a specific vehicle type
  displayOccupiedSlots(vehicleType) {
    this.floors.forEach(floor => {
      const occupiedSlots = floor.getOccupiedSlots(vehicleType).map(slot => slot.number).join(','); // Get slot numbers
      console.log(`Occupied slots for ${vehicleType} on Floor ${floor.number}: ${occupiedSlots}`);
    });
  }
}

module.exports = ParkingLot; // Export the ParkingLot class
