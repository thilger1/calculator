const num = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operator');
const answer = document.getElementById('answer');
console.log(answer);
let valOne = null;
let valTwo = null;
let storedOp = null;

num.forEach((button) => {
    button.addEventListener('click', function(e){
        if (valOne == null && storedOp == null){
            valOne = button.value;
        } else {
            
        }
        answer.innerHTML = storedVal;
    });
});

op.forEach((button) => {
    button.addEventListener('click', function(e){
        if (valTwo != null){
            return equation(valOne, valTwo, storedOp);
        }
        storedOp = button.value;
    });
});
