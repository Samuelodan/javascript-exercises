const palindromes = function(string) {
  let trimmed = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
  tempArray = trimmed.split("");
  revString = ""
  for (let i = tempArray.length -1; i >= 0; i--){
    revString += tempArray[i];
  }
  return (revString === trimmed) 
};

// Do not edit below this line
module.exports = palindromes;
