const clock = document.querySelector("#clock");
const date = document.querySelector("#date");


function updateClock() {

    const now = new Date();


    // Get time
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    // AM / PM
    const period = hours >= 12 ? "PM" : "AM";


    // Convert to 12-hour format
    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }


    // Add leading zero
    const formattedHours =
        String(hours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    // Display time
    clock.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;


    // Display date
    date.textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

}


// Run immediately
updateClock();


// Update every second
setInterval(updateClock, 1000);