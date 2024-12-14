//Sign of a Number
/*
This code defines a function called signOfNumber that determines whether a number is positive, negative, or zero.
Let's break it down:
1. Function Declaration:
The function takes one parameter number of type number
It returns a string (indicated by : string after the parentheses)
Logic:
- If the number is exactly 0, it returns 'zero'
If the number is less than 0, it returns 'negative'
For all other cases (i.e., numbers greater than 0), it returns 'positive'
Testing:
- The code includes three test cases to demonstrate the function's behavior
Tests with 0, a positive number (1), and a negative number (-1)
This is a simple utility function that could be useful in scenarios where you need to determine and display the sign of a number in a human-readable format. The function is type-safe thanks to TypeScript's type annotations, ensuring that it only accepts numbers as input and always returns a string.
*/
function signOfNumber(number: number): string {
  if (number === 0) {
    return 'zero';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'positive';
  }
}

console.log(signOfNumber(0));
console.log(signOfNumber(1));
console.log(signOfNumber(-1));
//Smallest of Three Numbers

function smallestOfThreeNumbers(a: number, b: number, c: number): number {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

console.log(smallestOfThreeNumbers(1, 2, 3));
console.log(smallestOfThreeNumbers(3, 2, 1));
console.log(smallestOfThreeNumbers(2, 1, 3));
