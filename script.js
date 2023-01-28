class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number){

        if (this.currentOperand == null){
            this.currentOperand = number;
        }
        else {
            if (number === '.' && this.currentOperand.includes('.')) 
                return;
        
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation){

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numbers = document.querySelectorAll('[data-number');
const operators = document.querySelectorAll('[data-operation');
const equals = document.querySelector('[data-equals');
const clear = document.querySelector('[data-clear');
const currentOperandTextElement = document.querySelector('[data-current-operand');
const previousOperandTextElement = document.querySelector('[data-previous-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});