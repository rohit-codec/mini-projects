let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Clear previous errors
    document.querySelector("#emailError").style.display = "none";
    document.querySelector("#passwordError").style.display = "none";

    email.classList.remove("error");
    password.classList.remove("error");

    document.querySelector("#resultMessage").textContent = "";

    // Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // Check values
    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;

    // Email validation
    if (!emailAns) {

        document.querySelector("#emailError").textContent =
            "Email is incorrect";

        document.querySelector("#emailError").style.display =
            "initial";

        email.classList.add("error");

        isValid = false;
    }

    // Password validation
    if (!passwordAns) {

        document.querySelector("#passwordError").textContent =
            "Password must contain 8+ characters, uppercase, lowercase, number and special character";

        document.querySelector("#passwordError").style.display =
            "initial";

        password.classList.add("error");

        isValid = false;
    }

    // Everything correct
    if (isValid) {

        document.querySelector("#resultMessage").textContent =
            "Everything is correct";

    }

});