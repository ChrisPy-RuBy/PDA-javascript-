var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // testing the add function
  it('it can use add function', function() {
    calculator.add(5)
    assert.equal(5, calculator.runningTotal)
  })

  it('it can add zero', function() {
      calculator.add(0)
      assert.equal(0, calculator.runningTotal)
  })

  it('it can add negative numbers', function() {
    calculator.add(-1)
    assert.equal(-1, calculator.runningTotal)
  })

  it('can add on previous total', function() {
    calculator.previousTotal = 5;
    calculator.add(5);
    assert.equal(10, calculator.runningTotal)
  })

  it('it has a subtract function', function() {
    calculator.subtract(5)
    assert.equal(-5, calculator.runningTotal)
  })

  it('it has a multiply function', function() {
    calculator.previousTotal = 5;
    calculator.multiply(5)
    assert.equal(25, calculator.runningTotal)
  })

  it('it has a divide function', function() {
    calculator.previousTotal = 5;
    calculator.divide(5)
    assert.equal(1, calculator.runningTotal)
  })

  it('it has a divide by 0 value', function() {
    calculator.divide(0)
    assert.equal(undefined, calculator.runningTotal)

  })

  it('can click the number click button', function() {
    calculator.numberClick(5)
    assert.equal(5, calculator.runningTotal)
  })

  it('running total works for number clicked', function() {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.equal(123, calculator.runningTotal)
  })

  it('can click operatorClick', function() {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.equal(123, calculator.runningTotal)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(246, calculator.runningTotal)
  } )

  it('can clear running total', function() {
    calculator.runningTotal = 25
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

});
