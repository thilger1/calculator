const num = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operator');
const showAnswer = document.getElementById('answer');
const clear = document.getElementById('clearButton');
let valOne = null;
let valTwo = null;
let storedOp = null;
let fullVal = null;
let result = null;

clear.addEventListener('click', () => {
    reset();
    showAnswer.innerHTML = "";
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
                result == null;
                valOne = newVal;
            } else {
                valOne = valOne.concat(newVal);
            }
            showAnswer.innerHTML = valOne;
        }
    });
});

op.forEach((button) => {
    button.addEventListener('click', function(e){
        if (result != null) {
            valOne = result;
            result = null;
            storedOp = button.value;
            return;
        }
        if (valTwo != null){
            equation(valOne, valTwo, storedOp);
            storedOp = button.value;
            return;
        }
        if (valOne == null && result == null){
            return;
        }
        else {
            storedOp = button.value;
            showAnswer.innerHTML = storedOp;
            return;
        }
    });
});

function equation(passOne, passTwo, passOp) {
    switch (passOp) {
        case '+':
            result = Number(passOne) + Number(passTwo);
            reset();
            showAnswer.innerHTML = result;
            break;
        case '-':
            result = Number(valOne) - Number(valTwo);
            reset();
            showAnswer.innerHTML = result;
            break;
        case '/':
            result = Number(valOne) / Number(valTwo);
            reset();
            showAnswer.innerHTML = result;
            break;
        case '*':
            result = Number(valOne) * Number(valTwo);
            reset();
            showAnswer.innerHTML = valOne;
            break;
    }
};

function reset(){
    valOne = null
    valTwo = null;
    storedOp = null;
}