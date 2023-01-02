const num = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const showAnswer = document.getElementById('answer');
const clear = document.getElementById('clearButton');
const point = document.getElementById('point');
const neg = document.getElementById('negative');
const percent = document.getElementById('percent');

let numOne = null;
let numTwo = null;
let storedOp = null;
let result = null;
let pointOne = false;
let pointTwo = false;

clear.addEventListener('click', () => {
    reset();
    showAnswer.innerHTML = "";
});

percent.addEventListener('click', () => {
    if (numOne != null && storedOp == null && numTwo == null){
        numOne = String(numOne).replace('.','');
        numOne = '0.'.concat(numOne);
        showAnswer.innerHTML = numOne;
        return;
    }
    if (numOne != null && numTwo != null && result == null){
        numTwo = String(numTwo).replace('.', '');
        numTwo = '0.'.concat(numTwo);
        showAnswer.innerHTML = numTwo;
        return;
    }
    return;
});

neg.addEventListener('click', () => {
    if (numOne != null && storedOp == null){
        numOne = String(-(numOne));
        showAnswer.innerHTML = numOne;
        return;
    }
    if (numOne != null && storedOp != null && numTwo != null && result == null){
        numTwo = String(-(numTwo));
        showAnswer.innerHTML = numTwo;
        return;
    }
});

point.addEventListener('click', () => {
    if (numOne == null){
        numOne = point.value;
        pointOne = true;
        showAnswer.innerHTML = cleanAnswer(numOne);
        return;
    }
    if (numOne != null && storedOp == null){
        if (pointOne == false){
            numOne = numOne.concat(point.value);
            pointOne = true;
            showAnswer.innerHTML = numOne;
            return;
        }
    }
    if (numOne != null && storedOp != null && numTwo == null){
        numTwo = point.value;
        pointTwo = true;
        showAnswer.innerHTML = numTwo;
        return;
    }
    if (numTwo != null && result == null){
        if (pointTwo == false){
            numTwo = numTwo.concat(point.value);
            pointTwo = true;
            showAnswer.innerHTML = numTwo;
            return;
        };
    };
    return;
});

equals.addEventListener('click', () => {
    if (numOne != null && storedOp != null && numTwo != null){
        result = equation(numOne, numTwo, storedOp);
    }
    if (numOne != null && storedOp == null){
        result = numOne;
    }
    let roundedResult = Math.round(result * 10000) / 10000;
    //showAnswer.innerHTML = 'moo';
    showAnswer.innerHTML = cleanAnswer(roundedResult);
    numOne = null;
    pointOne = false;
    numTwo = null;
    pointTwo = false;
    storedOp = null;
    removeSelected();
});

num.forEach((button) => {
    button.addEventListener('click', function(e){
        if (numOne == null){
            result = null;
            numOne = button.value;
            showAnswer.innerHTML = numOne;
            return;
        }
        if (numOne != null && storedOp == null){
            if (numOne.length < 9){
                numOne = numOne.concat(button.value);
                showAnswer.innerHTML = Number(numOne).toLocaleString('en-US');
                return;
            }
        }
        //if no numOne , = numOne
            //if no numOne, numOne
                //if numOne, numOne = numOne.concat(button.value);
        //if numOne and storedOp, numTwo
            //if no numTwo, numTwo
                //if numTwo, numTwo = numTwo.concat(button.value);
        if (numOne != null && storedOp != null && numTwo == null){
                numTwo = button.value;
                showAnswer.innerHTML = numTwo;
                return;
            }
        if (numTwo != null){
            if (numTwo.length < 9){
                numTwo = numTwo.concat(button.value);
                showAnswer.innerHTML = Number(numTwo).toLocaleString('en-US');
                return;
            }
        }
    });
});

op.forEach((button) => {
    button.addEventListener('click', function(e){
        if (numOne != null && numTwo == null){
            removeSelected();
            storedOp = button.value;
            removeSelected();
            button.classList.add('selected');
        };
        if (result != null){
            numOne = result;
            result = null;
            storedOp = button.value;
            removeSelected();
            button.classList.add('selected');
        };
        if (numOne != null && storedOp != null && numTwo != null){
            result = equation(numOne, numTwo, storedOp);
            showAnswer.innerHTML = cleanAnswer(result);
            storedOp = button.value;
            numOne = result;
            pointOne = false;
            numTwo = null;
            pointTwo = false;
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
    removeSelected();
    numOne = null;
    pointOne = false;
    numTwo = null;
    pointTwo = false;
    storedOp = null;
    result = null;
}

function cleanAnswer(numToClean){
    let stringNum = String(numToClean);
    if (stringNum.length > 20){
        return "Error";
    }
    if (stringNum.length > 9){
        
        let afterE = (stringNum.length - 6);
        let cleanedNum = `${stringNum.slice(0)}.${stringNum.slice(1,5)}e${stringNum.slice(6,afterE)}`;
        return cleanedNum;
    }
    return Number(numToClean).toLocaleString('en-US');
}

function removeSelected(){
    op.forEach((button) => {
        button.classList.remove('selected');
    });
};