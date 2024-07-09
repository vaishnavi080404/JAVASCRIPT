// LOOPS. ( to execute a piece of code again and again)
// for loop - block scope h!
// for loop
for (let i = 1; i <= 10; i++) {
    console.log("i =", i);
}
console.log("loop has ended!");

// Sum of 1 to n numbers
let int = prompt("Enter the number for sum calculation:");
let sum = 0;
for (let j = 1; j <= int; j++) {
    sum += j;
}
console.log("sum =", sum);

// while loop
let n = prompt('Enter n for while loop:');
let l = 1;
let count = 0;
while (l <= n) {
    count += l;
    l++;
}
console.log("sum =", count);

// do-while loop
let k1 = 1;
do {
    console.log("k1 =", k1);
    k1++;
} while (k1 <= 10);

let numb = prompt('Enter a number for do-while sum calculation:');
let h = 1;
let add = 0;
do {
    add += h;
    h++;
} while (h <= numb);
console.log("sum =", add);

// for-of loop
let str = "Vaishnavi";
let length = 0;
for (let char of str) {
    console.log("char =", char);
    length++;
}
console.log('string length =', length);

// for-in loop
let girl = {
    name: "Vaishnavi",
    gpa: 8.23,
    year: "2nd",
    isPass: true
};
for (let key in girl) {
    console.log("key =", key, "value =", girl[key]);
}

// even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("even i is =", i);
    }
}

// Guess the number game
let gameNum = 30;
let userNum = prompt("Guess the number:");
if (userNum == gameNum) {
    console.log("Congratulations, you guessed the correct number!!");
} else {
    userNum = prompt("Try again! Guess the number:");
    if (userNum == gameNum) {
        console.log("Congratulations, you guessed the correct number!!");
    } else {
        console.log("Sorry, you didn't guess the correct number.");
    }
}

// Guess the number game with a loop
let Num = 30;
let playerNum = prompt("Guess the number:");
while (playerNum != Num) {
    playerNum = prompt("Try again! Guess the number:");
}
console.log("Congratulations, you guessed the correct number!!");
