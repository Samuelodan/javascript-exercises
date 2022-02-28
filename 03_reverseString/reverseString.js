const reverseString = function(string) {
    tempArray = string.split("");
    let revString = "";
    for (let i = tempArray.length - 1; i >= 0; i--){
        revString += tempArray[i];
    }
    return revString;

};

// Do not edit below this line
module.exports = reverseString;
