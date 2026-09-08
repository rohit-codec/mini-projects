// Factory function
function createCounter() {

    // 🔒 Private variable
    let count = 0;

    // Public methods
    return {

        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        reset() {
            count = 0;
        },

        getCount() {
            return count;
        }
    };
}


// Create counter
const counter = createCounter();


// DOM elements
const countDisplay = document.getElementById("count");

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");


// Update UI
function updateDisplay() {
    countDisplay.textContent = counter.getCount();
}


// Increment
incrementButton.addEventListener("click", () => {

    counter.increment();

    updateDisplay();
});


// Decrement
decrementButton.addEventListener("click", () => {

    counter.decrement();

    updateDisplay();
});


// Reset
resetButton.addEventListener("click", () => {

    counter.reset();

    updateDisplay();
});


// Initial display
updateDisplay();