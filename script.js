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
            equation(valOne, valTwo, storedOp);
        }
        else {
            storedOp = button.value;
            answer.innerHTML = storedOp;
        }
    });
});

function equation(passOne, passTwo, passOp) {
    switch (passOp) {
        case '+':
            console.log(storedOp);
            console.log(valOne);
            console.log(valTwo);
            valOne = Number(passOne) + Number(passTwo);
            console.log(valOne);
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
