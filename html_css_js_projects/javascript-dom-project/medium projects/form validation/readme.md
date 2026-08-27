# Form Validation – Username & Password

📜 Note
(This is a frontend format-validation mini project.

It only checks whether the entered username/email and password follow the required format. It does not perform actual authentication or store user credentials.)

A simple **form validation mini project** built using HTML, CSS, and JavaScript.  
The project checks the format of the entered username/email and password using **Regular Expressions (Regex)**.

## 📌 Project Overview

This project demonstrates basic **client-side form validation**.

The form checks whether:

- The username/email follows the required format.
- The password follows the required format.
- Appropriate error messages are displayed for invalid inputs.
- A success message is displayed when all inputs are valid.

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Regular Expressions (Regex)

## ✨ Features

- Username/Email format validation
- Password format validation
- Error messages using `<small>` elements
- Error messages are hidden by default
- Invalid input fields are highlighted
- Success message for valid inputs
- Form submission handled using the `submit` event
- Prevents default form submission using `preventDefault()`

## 👤 Username / Email Validation

The username/email must follow a valid email-style format.

### Valid Example

```text
example@gmail.com