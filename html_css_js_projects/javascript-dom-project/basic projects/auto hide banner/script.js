const banner = document.getElementById("banner");
const closeBtn = document.getElementById("closeBtn");


// Function to hide banner
function hideBanner() {
    banner.classList.add("hide");
}


// Close button
closeBtn.addEventListener("click", hideBanner);


// Automatically hide after 5 seconds
setTimeout(hideBanner, 2000);