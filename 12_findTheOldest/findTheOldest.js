const findTheOldest = function(arr) {
  let age = 0;
  let currentDate = new Date().getFullYear();
  for (item of arr){
    if (!item.yearOfDeath){
      item.age = currentDate - item.yearOfBirth;
    } else {
      item.age = item.yearOfDeath - item.yearOfBirth;
    }
  }
  arr.sort((a, b) => {
    let first = (a.age);
    let next = (b.age);

    return (next - first);
  })
  return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
