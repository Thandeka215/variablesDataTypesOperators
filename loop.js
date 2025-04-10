let temperature = 29;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

let number = "20";

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("The sum is:", sum);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("The total sum is:", sum);

let userNumber;

do {
  userNumber = 20;
} while (isNaN(userNumber) || userNumber <= 10);

console.log("You entered a valid number:", userNumber);

const secretNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let guess;

do {
  guess = 10;
  if (guess !== secretNumber) {
    console.log("Wrong guess, try again!");
  }
} while (guess !== secretNumber);

console.log(" You guessed it! The number was:", secretNumber);
