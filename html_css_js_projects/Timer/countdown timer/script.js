const hoursInput = document.querySelector("#hours");
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");

const timer = document.querySelector("#timer");

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");


let totalSeconds = 0;
let interval = null;


// ---------------- START ----------------

startBtn.addEventListener("click", function () {

    // Don't create multiple intervals
    if (interval !== null) {
        return;
    }


    // Get values from inputs
    if (totalSeconds === 0) {

        const hours = Number(hoursInput.value);
        const minutes = Number(minutesInput.value);
        const seconds = Number(secondsInput.value);


        // Validate values
        if (
            hours < 0 ||
            minutes < 0 ||
            minutes > 59 ||
            seconds < 0 ||
            seconds > 59
        ) {
            alert("Please enter valid time.");
            return;
        }


        totalSeconds =
            hours * 60 * 60 +
            minutes * 60 +
            seconds;


        if (totalSeconds === 0) {
            alert("Please enter a time.");
            return;
        }

    }


    updateTimer();


    interval = setInterval(function () {

        totalSeconds--;

        updateTimer();


        // Timer finished
        if (totalSeconds <= 0) {

            clearInterval(interval);

            interval = null;

            totalSeconds = 0;

            // First show 00:00:00
            updateTimer();

            // Then show alert
            setTimeout(function () {
                alert("Time's up!");
            }, 100);

        }

    }, 1000);

});


// ---------------- PAUSE ----------------

pauseBtn.addEventListener("click", function () {

    clearInterval(interval);

    interval = null;

});


// ---------------- RESET ----------------

resetBtn.addEventListener("click", function () {

    clearInterval(interval);

    interval = null;

    totalSeconds = 0;


    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;


    updateTimer();

});


// ---------------- UPDATE TIMER ----------------

function updateTimer() {

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


    timer.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

}