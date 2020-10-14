const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!(Array.isArray(arr))) {
    throw new Error;
  }
  if (arr === null) {
    throw new Error;
  }

  let new_arr = [];
  arr.map((element, index) => {
    if (arr[index - 1] === '--discard-next') {
      return;
    }
    if (arr[index - 1] === '--double-next')  {
      new_arr.push(element);
    }
    if (arr[index + 1] === '--double-prev')  {
      new_arr.push(element);
    }

    if (arr[index + 1] === '--discard-prev') {
      return;
    }



    if (typeof(element) == 'number' || element[0] !== '-') {
      new_arr.push(element);
    }
    return;
  })

  new_arr = new_arr.filter(element => element != undefined)

  return new_arr;
};

  /*
  let new_arr = [];
  for (let i = 0;i < arr.length;i++) {
    let element = arr[i];
    if (arr[i - 1] === '--double-next' && arr[i + 1] === '--double-prev')  {
      new_arr.push(element);
      new_arr.push(element);
      new_arr.push(element);
    }  else if (arr[i - 1] === '--double-next')  {
      new_arr.push(element);
      new_arr.push(element);
    } else if (arr[i - 1] === '--discard-next') {

    } else if (arr[i + 1] === '--double-prev')  {
      new_arr.push(element);
      new_arr.push(element);

    } else if (arr[i + 1] === '--discard-prev') {

    } else {
      if (typeof(element) == 'number' || element[0] !== '-') {
        new_arr.push(element);
      }
    }

  }
  return new_arr;
};

   */
