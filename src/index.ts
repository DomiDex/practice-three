//Sign of a Number
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
