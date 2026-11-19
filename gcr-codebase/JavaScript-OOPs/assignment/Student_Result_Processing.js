class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

let students = [
    new Student("Aman", [85, 90, 78]),
    new Student("Riya", [65, 70, 62]),
    new Student("Karan", [30, 42, 35])
];

students.forEach(student => {
    console.log(student.name,
        "Average:", student.calculateAverage().toFixed(2),
        "Grade:", student.getGrade());
});
