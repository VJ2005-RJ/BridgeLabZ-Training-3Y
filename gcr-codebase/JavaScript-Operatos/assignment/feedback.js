// Q7: Customer Feedback Processor
var feedback = "Great product! Fast delivery and amazing sound quality!";

var wordCount = feedback.split(" ").length;
var lower = feedback.toLowerCase();

console.log("Word count:", wordCount);

if (lower.includes("bad") || lower.includes("poor")) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}
