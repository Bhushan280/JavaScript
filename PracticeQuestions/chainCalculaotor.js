/**
 * Question
 * Asked in Publicis sepient, Meesho
 * Level -> Easy
 * How would you implement a calculator class with methods for addition,
 * subtraction, and multiplication, supporting method chaining?
 * calculator.add(3).multiply(4).subtract(5).getValue()
 * class Calculator {
 *    write code here
 * }
 * const calculator = new Calculator(2);
 * console.log(calculator.add(3).multiply(4).subtract(5).getValue()); //15
 * 
 * I need to ---
 * Chain calculator 
 *  A calculator calss 
 *   A cal object and then /menthods
*/

class Calculator {
    constructor(value) {
        this.value = value;
    }

    add(item) {
        this.value = this.value + item;
        return this;
    }

    multiply(item) {
        this.value = this.value * item;
        return this;
    }

    subtraction(item) {
        this.value = this.value - item;
        return this;
    }

    getVal() {
        return this.value;
    }
}

const calc = new Calculator(3);
console.log(calc.add(4).multiply(2).subtraction(7).add(10).getVal());