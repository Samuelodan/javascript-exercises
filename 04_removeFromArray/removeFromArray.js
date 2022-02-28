const removeFromArray = function(numbers, ...remove) {
    let i = 0
    let index = NaN;
    remove.forEach((remNum) => {
      let i = 0;
      for (number of numbers){
        if (number === remNum){
          numbers.splice(i, 1);
        }
        i++;
      }
    })
    return numbers;
};


// Do not edit below this line
module.exports = removeFromArray;
