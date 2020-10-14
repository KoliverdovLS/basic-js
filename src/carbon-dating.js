const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  // remove line with error and write your code here
  if (this > 0 && this < 20) {
    let k;
    let sampleActivity = parseFloat(this);
    k = 0.693/5730;
    return (Math.log(MODERN_ACTIVITY/sampleActivity) / k);
  }


  return false;
};
