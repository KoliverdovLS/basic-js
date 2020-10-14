const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentInput: [],
  getLength() {
    return this.currentInput.length
  },
  addLink(value) {
    (value === undefined) ? this.currentInput.push('( )'): this.currentInput.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number' && position > 0 && position <= this.currentInput.length) {
      this.currentInput.splice((position - 1), 1);
    } else {
      this.currentInput = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.currentInput = this.currentInput.reverse();
    return this;
  },
  finishChain() {
    var chain = this.currentInput.join('~~');
    this.currentInput = [];
    return chain;
  }
};

module.exports = chainMaker;
