const count = document.querySelector("#count");

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");


let value = 0;


// Increase
increase.addEventListener("click", function () {

    value++;

    count.textContent = value;
    count.style.color=value%2==0 ?"red":"blue";
    

});


// Decrease
decrease.addEventListener("click", function () {

    value--;

    count.textContent = value;
    count.style.color=value%2==0 ?"red":"blue";

});


// Reset
reset.addEventListener("click", function () {

    value = 0;

    count.textContent = value;
    count.style.color="black";
});