const display = document.querySelector("#display");

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const lapBtn = document.querySelector("#lapBtn");
const resetBtn = document.querySelector("#resetBtn");

const lapList = document.querySelector("#lapList");


let milliseconds = 0;
let interval = null;
let lapNumber = 0;


// ---------------- START ----------------

startBtn.addEventListener("click", function () {

    // Prevent multiple intervals
    if (interval !== null) {
        return;
    }

    interval = setInterval(function () {

        milliseconds++;

        updateDisplay();

    }, 10);

});


// ---------------- PAUSE ----------------

pauseBtn.addEventListener("click", function () {

    clearInterval(interval);

    interval = null;

});


// ---------------- LAP ----------------

lapBtn.addEventListener("click", function () {

    // Don't create lap if stopwatch isn't running
    if (interval === null) {
        return;
    }

    lapNumber++;

    const lap = document.createElement("li");

    lap.innerHTML = `
        <span>Lap ${lapNumber}</span>
        <span>${formatTime()}</span>
    `;

    lapList.appendChild(lap);

});


// ---------------- RESET ----------------

resetBtn.addEventListener("click", function () {

    clearInterval(interval);

    interval = null;

    milliseconds = 0;

    lapNumber = 0;

    display.textContent = "00:00:00";

    lapList.innerHTML = "";

});


// ---------------- UPDATE DISPLAY ----------------

function updateDisplay() {

    display.textContent = formatTime();

}


// ---------------- FORMAT TIME ----------------

function formatTime() {

    const totalSeconds = Math.floor(milliseconds / 100);

    const hours = Math.floor(totalSeconds / 3600);

    const minutes =
        Math.floor((totalSeconds % 3600) / 60);

    const seconds =
        totalSeconds % 60;


    const formattedHours =
        String(hours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
