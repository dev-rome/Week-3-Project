"use strict";

// function that takes numbers 1-10 ;ogs to console
function basicLoop() {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}
basicLoop();

// using while loop returns array of odd numbers
// between 3 to 103
let oddNumbers = [];
let i = 0;

while (i <= 103) {
	i++;
	if (i % 2 !== 0) {
		oddNumbers.push(i);
	}
}
console.log(oddNumbers);

// function that recives array of numbers
// adds nums in array to give you total
function arraySum(num) {
	let addNum = 0;
	for (let y = 0; y < num.length; y++) {
		addNum += num[y];
		console.log(addNum);
	}
}

arraySum([1, 2, 3, 4, 5, 6]);

// while loop that counts down from 9-0
let x = 10;
while (x > 0) {
	x--;
	console.log(x);
}

// factorial of n
function factorial(num) {
	if (num === 0 || num === 1) {
		return 1;
	} else {
		for (let i = num - 1; i >= 1; i--) {
			num *= i;
		}
		return num;
	}
}
factorial(7);

// for loop that returns the sum of all numbers from 1 to n
function sumOfNum(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
sumOfNum(6);

// using for loop change every second letter to z
function changeToZ(string) {
	let word = string.split("");

	for (let i = 0; i < word.length; i++) {
		if (i % 2 !== 0) {
			word[i] = "Z";
		}
	}
	return word.join("");
}
console.log(changeToZ("donuts"));
