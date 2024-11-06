const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);
};

const power = function(first, second) {
	return Math.pow(first, second);
};

const factorial = function(number) {
  let product = 1;

  for (let i = number; i > 0; i--) {
    product *= i;
  }

  return product;
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
