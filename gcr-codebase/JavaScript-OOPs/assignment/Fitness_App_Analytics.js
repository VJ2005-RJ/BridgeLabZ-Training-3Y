class FitnessAnalytics {
    constructor(workouts) {
        if (!workouts || workouts.length === 0) {
            throw new Error("Workout data cannot be empty.");
        }

        this.workouts = workouts;
    }

    getActiveUsers() {
        return this.workouts.filter(person => person.steps > 7000);
    }

    getAverageCalories() {
        let total = this.workouts.reduce((sum, person) => {
            return sum + person.calories;
        }, 0);

        return total / this.workouts.length;
    }

    getUserSummary() {
        return this.workouts.map(person => {
            return person.user + " walked " + person.steps +
                " steps and burned " + person.calories + " calories.";
        });
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    let app = new FitnessAnalytics(workoutData);

    console.log("Active users:", app.getActiveUsers());
    console.log("Average calories:", app.getAverageCalories());
    console.log("User summary:", app.getUserSummary());
} catch (error) {
    console.log(error.message);
}
