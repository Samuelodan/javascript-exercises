const repeatString = function(string, number) {
    if (!number){
        //console.log("")
        return "";
    } else if (number < 0){
      //console.log("ERROR")
      return "ERROR";
    }
    let repString = string;
    for (let i = 1; i < number; ++i){
        repString += string;
    }
    
    return repString;
};

// Do not edit below this line
module.exports = repeatString;
