// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
let userAge = prompt("Enter your age: ");
if (userAge > 18) {
  console.log("You are old enough to drive");
} else {
  console(`You are left with ${18 - userAge} years to drive`);
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
let myAge = 22;
let yourAge = prompt("Enter your age: ");
if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else {
  console.log(`I am ${myAge - yourAge} years older than you.`);
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}
// ternary operator.
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);
//   let a = 4
//   let b = 3
//   4 is greater than 3
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.
let number;
let input = prompt("Enter a number: ");
if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let scores = prompt("Enter your score");
switch (scores) {
  case 80 - 100:
    console.log("Your grade is A");
    break;
  case 70 - 79:
    console.log("Your grade is B");
    break;
  case 60 - 69:
    console.log("Your grade is C");
    break;
  case 50 - 59:
    console.log("Your grade is D");
    break;
  case 0 - 49:
    console.log("Your grade is E");
    break;
  default:
    console.log("Invalid score");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("Enter a month: ");
if (month == "September" || month == "October" || month == "November") {
  console.log("The season is Automn");
} else if (month == "December" || month == "January" || month == "February") {
  console.log("The season is Winter");
} else if (month == "March" || month == "April" || month == "May") {
  console.log("The season is Spring");
} else {
  console.log("The season is Summer");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
//   What is the day  today? Saturday
//   Saturday is a weekend.

//   What is the day today? saturDaY
//   Saturday is a weekend.

//   What is the day today? Friday
//   Friday is a working day.

//   What is the day today? FrIDAy
//   Friday is a working day.

let weekDay = prompt("What is the day today? ");
switch (weekDay) {
  case "Saturday":
    console.log("Saturday is a weekend");
    break;
  case "Sunday":
    console.log("Sunday is a weekend");
    break;
  case "Monday":
    console.log("Monday is a working day");
    break;
  case "Tuesday":
    console.log("Tuesday is a working day");
    break;
  case "Wednesday":
    console.log("Wednesday is a working day");
    break;
  case "Thursday":
    console.log("Thursday is a working day");
    break;
  case "Friday":
    console.log("Friday is a working day");
    break;
  default:
    console.log("Invalid input");
}

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
let numDays = prompt("Enter a month: ");
switch (numDays) {
  case "January":
    console.log("January has 31 days");
    break;
  case "February":
    console.log("February has 28 days");
    break;
  case "March":
    console.log("March has 31 days");
    break;
  case "April":
    console.log("April has 30 days");
    break;
  case "May":
    console.log("May has 31 days");
    break;
  case "June":
    console.log("June has 30 days");
    break;
  case "July":
    console.log("July has 31 days");
    break;
  case "August":
    console.log("August has 31 days");
    break;
  case "September":
    console.log("September has 30 days");
    break;
  case "October":
    console.log("October has 31 days");
    break;
  case "November":
    console.log("November has 30 days");
    break;
  case "December":
    console.log("December has 31 days");
    break;
  default:
    console.log("Invalid input");
}

// Write a program which tells the number of days in a month, now consider leap year.
let numDaysLeap = prompt("Enter a month: ");
switch (numDaysLeap) {
  case "January":
    console.log("January has 31 days");
    break;
  case "February":
    console.log("February has 29 days");
    break;
  case "March":
    console.log("March has 31 days");
    break;
  case "April":
    console.log("April has 30 days");
    break;
  case "May":
    console.log("May has 31 days");
    break;
  case "June":
    console.log("June has 30 days");
    break;
  case "July":
    console.log("July has 31 days");
    break;
  case "August":
    console.log("August has 31 days");
    break;
  case "September":
    console.log("September has 30 days");
    break;
  case "October":
    console.log("October has 31 days");
    break;
  case "November":
    console.log("November has 30 days");
    break;
  case "December":
    console.log("December has 31 days");
    break;
  default:
    console.log("Invalid input");
}
