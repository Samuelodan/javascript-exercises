const sumAll = function (num1, num2) {
  let larger = null;
  let smaller = null;
  if (typeof num1 != 'number' || typeof num2 != 'number' ||
     num1 <= 0 || num2 <= 0){
    return 'ERROR';
  } else {
    if (num1 < num2){
      larger = num2;
      smaller = num1
    } else {
      larger = num1;
      smaller = num2
    }
    let sum = null;
    for (i = smaller; i <= larger; i++){
      sum += i;
    }
    return sum;
  }
}

// Do not edit below this line
module.exports = sumAll;
