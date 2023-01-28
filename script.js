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

    signChange() {
        if (this.currentOperand == null)
            return;
        else
            this.currentOperand = this.currentOperand * (-1);
    }

    percent() {
        if (this.currentOperand == null)
            return;
        else
            this.currentOperand = this.currentOperand / 100;
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
            }
            if (decimalDigits != null) {
                return `${integerDisplay}.${decimalDigits}`
            }
            else {
                return integerDisplay;
            }
        }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.previousOperand == null)
            return;
        else
            this.previousOperandTextElement.innerText = this.getDisplayNumber(this.previousOperand);
    }
}

const numberButtons = document.querySelectorAll('[data-number');
const operatorButtons = document.querySelectorAll('[data-operation');
const equalButton = document.querySelector('[data-equals');
const clearButton = document.querySelector('[data-clear');
const signButton = document.querySelector('[data-sign-change]');
const percentButton = document.querySelector('[data-percent]');
const currentOperandTextElement = document.querySelector('[data-current-operand');
const previousOperandTextElement = document.querySelector('[data-previous-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});

equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

signButton.addEventListener('click', button => {
    calculator.signChange();
    calculator.updateDisplay();
})

percentButton.addEventListener('click', button => {
    calculator.percent();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})