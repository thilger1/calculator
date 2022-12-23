const num = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operator');
const answer = document.getElementById('answer');
const clear = document.getElementById('clearButton');
let valOne = null;
let valTwo = null;
let storedOp = null;
let fullVal = null;

clear.addEventListener('click', () => {
    valOne = null;
    valTwo = null;
    storedOp = null;
    answer.innerHTML = "";
});

num.forEach((button) => {
    button.addEventListener('click', function(e){
        newVal = button.value;
        //val Two (after operator)
        if (valOne != null && storedOp != null){
            if (valTwo == null){
                valTwo = newVal;
            } else {
                valTwo = valTwo.concat(newVal);
            }
            answer.innerHTML = valTwo;
        //val One (before operator)
        } else {
            if (valOne == null){
                valOne = newVal;
            } else {
                valOne = valOne.concat(newVal);
            }
            answer.innerHTML = valOne;
        }
    });
});

op.forEach((button) => {
    button.addEventListener('click', function(e){
        if (valTwo != null){
            answer.innerHTML = equation(valOne, valTwo, storedOp);
        }
        else {
            storedOp = button.value;
            answer.innerHTML = storedOp;
        }
    });
});

function equation(valOne, valTwo, storedOp) {
    switch (storedOp) {
        case '+':
            valOne = valOne + valTwo;
            valTwo = null;
            answer.innerHTML = valOne;
            break;
        case '-':
            valOne = valOne - valTwo;
            valTwo = null;
            answer.innerHTML = valOne;
            break;
        case '/':
            valOne = valOne / valTwo;
            valTwo = null;
            answer.innerHTML = valOne;
            break;
        case '*':
            valOne = valOne * valTwo;
            valTwo = null;
            answer.innerHTML = valOne;
            break;
    }
};
