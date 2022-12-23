const btn = document.querySelectorAll("button");
const answer = document.getElementById('answer');
console.log(answer);

btn.forEach((button) => {
    button.addEventListener('click', function(e){
        let val = button.value;
        answer.innerHTML = val;
    });
});