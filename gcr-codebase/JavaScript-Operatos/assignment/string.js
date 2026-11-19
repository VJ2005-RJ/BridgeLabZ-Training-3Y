// Q2: String Manipulation Report
var product = "  wireless headphones PRO  ";

// trim spaces and lowercase
var cleaned = product.trim().toLowerCase();

// capitalize first letter of each word
var words = cleaned.split(" ");
var capitalized = words.map(function (w) {
  return w.charAt(0).toUpperCase() + w.slice(1);
});
var title = capitalized.join(" ");

// replace "Pro" with "Pro Edition"
title = title.replace("Pro", "Pro Edition");

console.log("Cleaned title:", title);
console.log("Length:", title.length);
