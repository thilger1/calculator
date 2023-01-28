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
        if (this.currentOperand == '') 
            return;
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current))
            return;
        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case 'X':
                computation = prev * current
                break;
            case '÷':
                computation = prev / current
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
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

equals.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})