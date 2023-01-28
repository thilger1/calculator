class Calculator {
    constructor(previousOp, currentOp){
        this.previousOp = previousOp;
        this.currentOp = currentOp;
    }

    clear(){
        this.currentOp = '';
        this.previousOp = '';
        this.operation = undefined;
    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute() {

    }

    updateDisplay() {

    }
}



const numbers = document.querySelectorAll('[data-number');
const operators = document.querySelectorAll('[data-operation');
const equals = document.querySelector('[data-equals');
const clear = document.querySelector('[data-clear');
const currentOp = document.querySelector('[data-current-operand');
const previousOp = document.querySelector('[data-previous-operand');

const calculator = new Calculator(previousOp, currentOp)

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
})