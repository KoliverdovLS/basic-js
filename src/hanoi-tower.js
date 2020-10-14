const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: 0,
    seconds: 0
  };
  let turns_previous = 3;
  let turns = 0;
  for (i = 2;i < disksNumber;i++){
    turns = turns_previous * 2 + 1;
    turns_previous = turns;
  }
  let seconds = Math.floor((turns_previous * 3600) / turnsSpeed);
  result.turns = turns_previous;
  result.seconds = seconds;
  return result;
  // remove line with error and write your code here
};
