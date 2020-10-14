const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
      return 'Unable to determine the time of year!';
  }
  var timestamp = Date.parse(date);

  if (isNaN(timestamp) == true || Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error;
  }

  let month = date.getMonth();

  if (month > 1 && month < 5) {
      return 'spring';
  } else if (month > 10 || month < 2) {
      return 'winter';
  } else if (month > 7 && month < 11) {
      return 'autumn'
  } else if (month > 4 && month < 9) {
      return "summer";
  }




};
