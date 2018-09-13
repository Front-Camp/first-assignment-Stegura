/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  let arr = new Array(length),
    newStr;

  if(length > str.length) {
    newStr = str + replacer;
  } else {
    for (let i = 0; i < length; i++) {
      arr[i] = str.split('')[i];
    }
    newStr = arr.join + replacer;
  }

  return newStr;
};

export default truncate;
