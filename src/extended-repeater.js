const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // remove line with error and write your code here
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';

  if (options.repeatTimes !== undefined){
    repeatTimes = options.repeatTimes;
  }
  if (options.separator !== undefined){
    separator = options.separator;
  }
  if (options.addition !== undefined){
    addition = String(options.addition);
  }
  if (options.additionRepeatTimes !== undefined){
    additionRepeatTimes = (options.additionRepeatTimes);
  }
  if (options.additionSeparator !== undefined){
    additionSeparator = options.additionSeparator;
  }

let result = '';
  for (i = 0; i < repeatTimes;i++){
    if (i > 0 && i <= repeatTimes) {
      result += separator;
    }
    result += str
    for (j = 0; j < additionRepeatTimes;j++) {
      if (j > 0 && j <= additionRepeatTimes) {
        result += additionSeparator;
      }
      result += addition;
    }
  }
  return result;
};
  