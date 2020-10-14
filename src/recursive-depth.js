const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, i) {
    !i?i = 1:i++;
    if (JSON.stringify(arr.flat(1)) == JSON.stringify(arr)) {
      return 1;
    } else if (JSON.stringify(arr.flat(i - 1)) == JSON.stringify(arr.flat(i))) {
      return (i);
    } else {
      return this.calculateDepth(arr, i);
    }
  }



};