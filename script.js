const num = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const showAnswer = document.getElementById('answer');
const clear = document.getElementById('clearButton');
let numOne = null;
let numTwo = null;
let storedOp = null;
let result = null;

clear.addEventListener('click', () => {
    reset();
    showAnswer.innerHTML = "";
});

equals.addEventListener('click', () => {
    if (numOne != null && storedOp != null && numTwo != null){
        result = equation(numOne, numTwo, storedOp);
    }
    if (numOne != null && storedOp == null){
        result = numOne;
    }
    showAnswer.innerHTML = result;
    numOne = null;
    numTwo = null;
    storedOp = null;
});

num.forEach((button) => {
    button.addEventListener('click', function(e){
        if (numOne == null){
            numOne = button.value;
        }
        if (numOne != null && storedOp == null){
            numOne = numOne.concat(button.value);
        }
        //if no numOne , = numOne
            //if no numOne, numOne
                //if numOne, numOne = numOne.concat(button.value);
        //if numOne and storedOp, numTwo
            //if no numTwo, numTwo
                //if numTwo, numTwo = numTwo.concat(button.value);
        if (numOne != null && storedOp != null){
            numTwo = button.value;
        }
        if (numTwo != null){
            numTwo = numTwo.concat(button.value);
        }
    });
});

op.forEach((button) => {
    button.addEventListener('click', function(e){
        if (numOne != null && storedOp == null && numTwo == null){
            storedOp = button.value;
        };
        if (result != null){
            numOne = result;
            result = null;
            storedOp = button.value;
        };
        if (numOne != null && storedOp != null && numTwo != null){
            result = equation(numOne, numTwo, storedOp);
            showAnswer.innerHTML = result;
            storedOp = button.value;
            numOne = null;
            numTwo = null;
        };

    });
});

function equation(one, two, operator){
    switch(operator){
        case '+':
            return (Number(one) + Number(two));
        
        case '-':
            return (Number(one) - Number(two));
        
        case '*':
            return (Number(one) * Number(two));
        
        case '/':
            return (Number(one) / Number(two));
        };
};
        
function reset(){
    numOne = null;
    numTwo = null;
    storedOp = null;
    result = null;
}