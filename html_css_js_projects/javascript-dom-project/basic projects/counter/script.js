const count = document.querySelector("#count");

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");


let value = 0;


// Increase
increase.addEventListener("click", function () {

    value++;

    count.textContent = value;

});


// Decrease
decrease.addEventListener("click", function () {

    value--;

    count.textContent = value;

});


// Reset
reset.addEventListener("click", function () {

    value = 0;

    count.textContent = value;

});