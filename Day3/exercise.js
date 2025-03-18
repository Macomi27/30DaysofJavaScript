// Day 3: Exercises
// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Ma";
let lastName = "Sama";
let country = "Country";
let city = "Bamenda";
let age = 22;
let isMarried = false;
let year = 2025;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10is equal to 10
console.log(typeof "10" === typeof 10);

// Check if parseInt('9.8') is equal to 10
console.log(typeof "9.8" === typeof 10);

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
let carColor = "red";
let status = true;
let emptyString = " ";

// Write three JavaScript statement which provide falsy value.
let level = null;
let isAdult = false;
const village = undefined;

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
console.log(4 > 3);
// 4 >= 3
console.log(4 >= 3);
// 4 < 3
console.log(4 < 3);
// 4 <= 3
console.log(4 <= 3);
// 4 == 4
console.log(4 == 4);
// 4 === 4
console.log(4 === 4);
// 4 != 4
console.log(4 != 4);
// 4 !== 4
console.log(4 !== 4);
// 4 != '4'
console.log(4 != "4");
// 4 == '4'
console.log(4 == "4");
// 4 === '4'
console.log(4 === "4");

// Find the length of python and jargon and make a falsy comparison statement.
let lenPython = "python".length;
let lenJargon = "jargon".length;
console.log(lenPython > lenJargon);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12);
// 4 > 3 && 10 > 12
console.log(4 > 3 && 10 > 12);
// 4 > 3 || 10 < 12
console.log(4 > 3 || 10 < 12);
// 4 > 3 || 10 > 12
console.log(4 > 3 || 10 > 12);
// !(4 > 3)
console.log(!(4 > 3));
// !(4 < 3)
console.log(!(4 < 3));
// !(false)
console.log(!false);
// !(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12));
// !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12));
// !(4 === '4')
console.log(!(4 === "4"));

// There is no 'on' in both dragon and python

// Use the Date object to do the following activities
const now = new Date();
// What is the year today?
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth());

// What is the date today?
console.log(now.getDate());

// What is the day today as a number?
console.log(now.getDay());

// What is the hours now?
console.log(now.getHours());

// What is the minutes now?
console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const before = new Date("1970-01-01");
const elapsedSeconds = Math.floor(now - before);
console.log(elapsedSeconds);

// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = prompt("Enter the base: ", 20);
let height = prompt("Enter the height: ", 10);
let area = 0.5 * base * height;
console.log("The area of the triangle is: ", area);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let a = prompt("Enter side a: ", 5);
let b = prompt("Enter side b: ", 4);
let c = prompt("Enter side c: ", 3);
let perimeter = a + b + c;
console.log("The perimeter of the triangle is: ", perimeter);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let l = prompt("Enter the length: ", 9);
let w = prompt("Enter the width: ", 3);
let rectangleArea = l * w;
let p = 2 * l + w;
console.log(rectangleArea);
console.log(p);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt("Enter the radius: ", 7);
const pi = Math.PI;
let cirlceArea = pi * r * r;
let circ = 2 * pi * r;
console.log("The area of the circle is: ", cirlceArea);
console.log("The circumference of the circle is: ", circ);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1 = 2;
let y2 = 10;
let x1 = 2;
let x2 = 6;
let m = (y2 - y1) / (x2 - x1);
console.log("The slope between the points is: ", m);
// Compare the slope of above two questions.
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = prompt("Enter the number of hours: ", 40);
let rph = prompt("Enter the number of hours: ", 28);
let pay = hours * rph;
console.log("Your weekly earning is: ", pay);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Ma Comfort"(myName.length > 7)
  ? console.log("My name is long")
  : console.log("My name is short");

// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let myFirstName = "Ma".length;
let myFamilyName = "Sama".length(myFirstName > myFamilyName)
  ? console.log(
      `My first name  ${myFirstName} is longer than my family name ${myFamilyName}`
    )
  : console.log(
      `My family name ${myFamilyName} is longer than my first name ${myFirstName}`
    );

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let my_age = 250;
let your_age = 25;
let difference = my_age - your_age;
console.log(`I am , ${difference},  years older than you`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
let yob = prompt("Enter year of birth: ", 1995);
let userAge = now.getFullYear - yob;
// You are 25. You are old enough to drive
console.log(`You are  + ${userAge} . You are old enough to drive`);

// Enter birth year: 2005
let new_yob = prompt("Enter year of birth: ", 2005);
let userAge1 = now.getFullYear - new_yob;
// You are 15. You will be allowed to drive after 3 years.
console.log(
  `You are ${userAge1} . You will be allowed to drive after 3 years.`
);

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let oneYearInSecs = 60 * 60 * 24 * 366;
// Enter number of years you live: 100
let numYears = prompt("Enter your number of years: ", 100);
// You lived 3153600000 seconds.
console.log(`You lived  ${numYears}*${oneYearInSecs} seconds`);

// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
