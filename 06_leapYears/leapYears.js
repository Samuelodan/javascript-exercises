const leapYears = function (year){
    if (year % 4 != 0){
      return false;
    } else if (year >= 400 && year % 400 != 0 &&
               year % 100 == 0){
      return false
    }
    return true;
}

// Do not edit below this line
module.exports = leapYears;
