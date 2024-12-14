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
/*
This code defines a function called smallestOfThreeNumbers that finds the smallest of three numbers.
Let's break it down:
1. Function Declaration:
The function takes three parameters a, b, and c of type number
It returns a number (indicated by : number after the parentheses)
Logic:
- It compares the three numbers and returns the smallest one
Testing:
- The code includes three test cases to demonstrate the function's behavior
Tests with different sets of numbers to ensure the function works correctly
This is a simple utility function that could be useful in scenarios where you need to find the smallest number among three values. The function is type-safe thanks to TypeScript's type annotations, ensuring that it only accepts numbers as input and always returns a number.
*/
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
console.log(smallestOfThreeNumbers(3, 2, 4));
console.log(smallestOfThreeNumbers(5, 4, 3));

//Vowel or Consonant
/*
This code defines a function called vowelOrConsonant that determines whether a character is a vowel or a consonant.
Let's break it down:
1. Function Declaration:
The function takes one parameter char of type string
It returns a string (indicated by : string after the parentheses)
Logic:
- It checks if the character is a vowel (a, e, i, o, u) and returns 'vowel' if it is
- Otherwise, it returns 'consonant'
Testing:
- The code includes six test cases to demonstrate the function's behavior
Tests with different vowels and consonants to ensure the function works correctly
This is a simple utility function that could be useful in scenarios where you need to classify characters as vowels or consonants. The function is type-safe thanks to TypeScript's type annotations, ensuring that it only accepts strings as input and always returns a string.
*/
function vowelOrConsonant(char: string): string {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return 'vowel';
  } else {
    return 'consonant';
  }
}

console.log(vowelOrConsonant('a'));
console.log(vowelOrConsonant('b'));
console.log(vowelOrConsonant('c'));
console.log(vowelOrConsonant('d'));
console.log(vowelOrConsonant('e'));
console.log(vowelOrConsonant('i'));

// Alarm Clock
function alarmClock(currentTime: number, targetTime: number): string {
  if (currentTime === targetTime) {
    return 'Alarm is ringing';
  } else {
    return 'Alarm is not ringing';
  }
}

console.log(alarmClock(10, 10));
console.log(alarmClock(10, 11));
