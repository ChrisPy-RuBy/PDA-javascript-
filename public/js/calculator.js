var Calculator = function(){
  this.previousOperator = null; // the last operator the user clicked
  this.previousTotal = 0;       // the total of the previous operation
  this.newTotal = true;         // whether the previous operation has just been calculated
  this.runningTotal = 0;        // the current value to operate on the previous total
}

Calculator.prototype = {

  add: function(number){
  //  console.log("add performed")
    this.runningTotal = parseFloat(this.previousTotal) + parseFloat(number);
  },

  subtract: function(number){
    //console.log("subtract performed")
    this.runningTotal = parseFloat(this.previousTotal) - parseFloat(number);
  },

  multiply: function(number){
    //console.log('multiply performed')
    this.runningTotal = parseFloat(this.previousTotal) * parseFloat(number);
  },

  divide: function(number){
    if (number == 0) {
      this.runningTotal = undefined
    } else {
      this.runningTotal = parseFloat(this.previousTotal) / parseFloat(number);
    }
  },

  numberClick: function(number) {

    // when a number is clicked, if a previous operation has just been completed,
    // or there is a zero in the running total, clear the running total, and reset
    // the `newTotal` flag
    if (this.runningTotal == 0 || this.newTotal) {
      this.runningTotal = '';
      this.newTotal = false;
    }
    //console.log("in number clicked", number)
    // concatenate the clicked number to the running total
    this.runningTotal = parseFloat('' + this.runningTotal + number);
    //console.log('running total in number clicked', this.runningTotal)

  },

  operatorClick: function(operator) {

    // if there was a previous operator recorded as having been clicked, perform
    // the operation for the previous operator
    //console.log('running total in operator click', this.runningTotal)
    if (this.previousTotal && this.previousOperator) {
      switch (this.previousOperator) {
        case ('+'):
        this.add(this.runningTotal);
        //console.log('add', this.runningTotal)
        break;
        case ('-'):
        this.subtract(this.runningTotal);
        //console.log('subtract', this.runningTotal) 
        break;
        case ('*'):
        this.multiply(this.runningTotal);
      //  console.log('multiply', this.runningTotal)
        break;
        case ('/'):
        this.divide(this.runningTotal);
        //console.log('divide', this.runningTotal)
        break;
      }

    }

    // if the 'equals' button was clicked, clear the previous operator, otherwise
    // record what the previous operator was
    if (operator == '=') {
      this.previousOperator = null;
    } else {
      this.previousOperator = operator;
    }
    // replace the previous total with the current running total and flag that a
    // new total has been calculated

    this.previousTotal = this.runningTotal;
    this.newTotal = true;
    //console.log(this.previousTotal)
    //console.log(this.runningTotal)
  },

  clearClick: function() {
    if (this.runningTotal == 0) {
      this.previousOperator = null;
      this.previousTotal = null;
    }
    this.runningTotal = 0;
  }

};

if (typeof module != 'undefined'){ module.exports = Calculator };
