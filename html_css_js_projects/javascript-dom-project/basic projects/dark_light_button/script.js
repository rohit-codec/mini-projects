const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {

    // Add/remove dark class
    document.body.classList.toggle("dark");


    // Change button text
    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "Light Mode";

    } else {

        themeBtn.textContent = "Dark Mode";

    }

});