const num = document.querySelectorAll('.number');
const answer = document.getElementById('answer');
console.log(answer);

num.forEach((button) => {
    button.addEventListener('click', function(e){
        let val = button.value;
        answer.innerHTML = val;
    });
});