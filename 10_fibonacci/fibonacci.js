const fibonacci = function (number) {
  if (number < 0){
    return "OOPS"
  }
  const sequence = [0, 1, 1];
  for (i = 3; i <= number; i++){
    let sum = sequence[i-2] + sequence[i-1]
    sequence.push(sum);
  }
  return sequence[number];
};

// Do not edit below this line
module.exports = fibonacci;
