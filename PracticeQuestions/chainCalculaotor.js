
/*
chain calculator 
a calculator calss 
a cal object and then /menthods
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