// Q10: Departmental Employee Evaluator
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (var i = 0; i < departments.length; i++) {
  var name = departments[i][0];
  var score = departments[i][1];
  var rating;

  if (score >= 90) {
    rating = "Excellent";
  } else if (score >= 75) {
    rating = "Good";
  } else if (score >= 60) {
    rating = "Average";
  } else {
    rating = "Needs Improvement";
  }

  console.log(name + " (" + score + "): " + rating);
}
