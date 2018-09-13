/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let tempArr = [];

  for (let j = o; j < arr.length; j++) {
    if (isFinite(arr[j]) && !isNaN(arr[j])) {
      tempArr.push(arr[j]);
    }
  }
  
  let x = tempArr[0];

  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] > x) {
      x = tempArr[i];
    }
  }

  return x;
};

export default max;
