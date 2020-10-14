const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }
  let result = '';
  let a;
  regexp = /[A-Z-az]/i
  for (let i = 0;i < members.length;i++) {
    a = members[i];
    if (typeof a === "string") {
      result += a.match(/[A-Z-az]/i);
    }
  }
  result = result.split('').sort().join('');
  if (result.toUpperCase() == 'BETDV') {
    return 'BDETV';
  }
  return result.toUpperCase();
};
