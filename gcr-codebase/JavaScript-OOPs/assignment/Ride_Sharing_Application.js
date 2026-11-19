class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null ||
            this.distance < 0 || this.distance === "") {
            throw new Error("Please enter a valid trip distance.");
        }

        return this.distance * 12;
    }
}

let driver = new Driver("Rahul", 4.8, "Swift Dzire");
let trip = new Trip("Mathura", "Agra", 60);

console.log("Driver:", driver.name);
console.log("Vehicle:", driver.vehicle);

try {
    console.log("Trip fare: Rs.", trip.calculateFare());
} catch (error) {
    console.log(error.message);
}
