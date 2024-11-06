const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(total) {
  let result = 0;
  total.forEach((number) => {
    result += number;
  })
  return result;
};

const multiply = function(total) {
  let result = 1;
  total.forEach((number) => {
    result *= number;
  })
  return result;
};

const power = function(first, second) {
	return Math.pow(first, second);
};

const factorial = function(number) {
  let result = 1;

  for (let i = result; i<=number; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
