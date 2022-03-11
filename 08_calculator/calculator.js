const add = function(num1, num2) {
	let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(array) {
  let sum = 0;
	for (item of array){
    sum+= item;
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for (item of array){
    result *= item;
  }
return result;
};

const power = function(num1, num2) {
	let result = num1 ** num2;
  return result;
};

const factorial = function(number) {
	let result = 1;
  if (number === 0){
    return result;
  }
  for (i = number - 1; i >= 1; i--){
    result = number *= i;
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
