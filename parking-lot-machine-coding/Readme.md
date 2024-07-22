# Parking Lot System

## Overview

The Parking Lot System is a command-line application for managing a parking lot with multiple floors and slots. This application supports creating a parking lot, adding vehicles, and displaying parking slot information.

## Setup

1. **Extract the ZIP Folder**

   Extract the provided ZIP folder to a directory of your choice.

2. **Navigate to the Project Directory**

   Open a terminal or command prompt and navigate to the extracted project directory.

3. **Run the Application**

   Execute the application using Node.js. Ensure Node.js is installed on your machine.

```bash
   node index.js
```



**Commands**
The application accepts the following commands:

# Create Parking Lot

```bash
create_parking_lot <parking_lot_id> <no_of_floors> <no_of_slots_per_floor>
```

Example:

```bash
create_parking_lot PR1234 2 6
```

# Park Vehicle

```bash
park_vehicle <vehicle_type> <reg_no> <color>
```

Example:

```bash
park_vehicle CAR KA-01-DB-1234 black
```

# Unpark Vehicle

```bash
unpark_vehicle <ticket_id>
```

Example:

```bash
unpark_vehicle PR1234_1_4
```

# Display Free Count

```bash
display free_count <vehicle_type>
```

Example:

```bash
display free_count CAR
```

# Display Free Slots

```bash
display free_slots <vehicle_type>
```

Example:

```bash
display free_slots BIKE
```

# Display Occupied Slots

```bash
display occupied_slots <vehicle_type>
```

Example:

```bash
display occupied_slots TRUCK
```
# Exit

```bash
exit
```

**Ends the application.**