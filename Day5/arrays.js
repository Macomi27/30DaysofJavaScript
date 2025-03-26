// Exercise: Level 1

// Declare an empty array;
const arr = [];

// Declare an array with more than 5 number of elements
const num = [1, 2, 3, 4, 6, 9, 23];

// Find the length of your array
console.log(num.length);

// Get the first item, the middle item and the last item of the array
console.log(num[0]);
//middle item
console.log(num[Math.floor(num.length / 2)]);
console.log(num[num.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1,
  "hello",
  true,
  3.14,
  "world",
  false,
  5,
  6,
  7,
  8,
  9,
  10,
];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies.length);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]}, are big IT companies.`
);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("google")) {
  console.log("google");
} else {
  console.log("company is not found");
}

// Filter out companies which have more than one 'o' without the filter method
// console.log(itCompanies.includes('o'))

// Sort the array using sort() method
let itCompaniesSorted = itCompanies.sort();
console.log(itCompaniesSorted);

// Reverse the array using reverse() method
let itCompaniesReversed = itCompanies.reverse();
console.log(itCompaniesReversed);

// Slice out the first 3 companies from the array
let itCompaniesFirstThree = itCompanies.slice(0, 3);
console.log(itCompaniesFirstThree);

// Slice out the last 3 companies from the array
let itCompaniesLastThree = itCompanies.slice(-1, -4);
console.log(itCompaniesLastThree);

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));

// Remove the first IT company from the array
let firstRemoved = itCompanies.shift();
console.log(firstRemoved);

// Remove the middle IT company or companies from the array
let middleRemoved = itCompanies.slice(3, 4).pop();
console.log(middleRemoved);

// Remove the last IT company from the array
let lastRemoved = itCompanies.pop();
console.log(lastRemoved);

// Remove all IT companies
let allRemoved = itCompanies.slice(0).pop();
console.log(allRemoved);

// Exercise: Level 2

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = [
  "I",
  "love",
  "teaching",
  "and",
  "empowering",
  "people",
  "I",
  "teach",
  "HTML",
  "CSS",
  "JS",
  "React",
  "Python",
];
console.log(words);
console.log(words.length);
// 13

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
let addedItemStart = shoppingCart.unshift("Meat");
console.log(addedItemStart);

// add Sugar at the end of you shopping cart if it has not been already added
let addedItemEnd = shoppingCart.push("Sugar");
console.log(addedItemEnd);

// remove 'Honey' if you are allergic to honey
let honeyRemoved = shoppingCart.slice(4, 5).pop();
console.log(honeyRemoved);

// modify Tea to 'Green Tea'
let modifiedCart = shoppingCart[3].replace("Tea", "Green Tea");
console.log(modifiedCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethopia")) {
  console.log("ETHOPIA");
} else {
  countries.push("Ethopia");
  console.log(countries);
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAge = ages.sort();
// const minAge = sortedAge.min()
// console.log(minAge)

// Find the median age(one middle item or two middle items divided by two)

// Find the average age(all items divided by number of items)

// Find the range of the ages(max minus min)

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

// Find the middle country(ies) in the countries array
const midCountry = countries[Math.ceil(countries.length / 2)];
console.log(midCountry);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
