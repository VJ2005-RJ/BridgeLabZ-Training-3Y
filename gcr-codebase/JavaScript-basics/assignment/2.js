let userName = "Rahul";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Java", "Python"];
let user = { city: "Mathura", country: "India" };
let address = null;
let phoneNumber;

let report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Phone Number", Value: phoneNumber, Type: typeof phoneNumber }
];

console.table(report);
