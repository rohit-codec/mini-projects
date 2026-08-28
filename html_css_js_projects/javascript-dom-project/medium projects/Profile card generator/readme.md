# Profile Card Generator

A simple **Profile Card Generator** mini project built using **HTML, CSS, and JavaScript**.

The project contains a form where the user enters profile information such as profile photo, name, email, contact, occupation, and description. After submitting the form, JavaScript dynamically creates a profile card without refreshing the page.

Multiple profile cards can be created, and previously created cards remain on the page.

---

## 🚀 Features

* Add a profile photo using an image URL
* Enter name
* Enter email
* Enter contact number
* Enter occupation
* Add a short description
* Form validation using HTML input attributes
* Submit form without refreshing the page
* Dynamically create profile cards using JavaScript
* Create multiple profile cards
* Previous cards are not deleted when a new card is created
* Automatically reset the form after submission
* Responsive card layout
* Fixed-size profile cards
* Hover effect on profile cards
* Clean and simple user interface

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **DOM Manipulation**
* **HTML Form Handling**

---

## 📁 Project Structure

```text
profile-card-generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the application, including:

* Profile form
* Input fields
* Submit button
* Container where generated cards are displayed

### `style.css`

Contains the styling for:

* Form
* Input fields
* Submit button
* Profile cards
* Responsive grid
* Card hover effect
* Page layout

### `script.js`

Contains the main functionality of the project:

* Handling form submission
* Preventing page refresh
* Reading input values
* Creating profile cards dynamically
* Adding cards to the page
* Resetting the form

---

## 📋 Form Fields

The form contains the following fields:

| Field         | Description                      |
| ------------- | -------------------------------- |
| Profile Photo | URL of the profile image         |
| Name          | User's name                      |
| Email         | User's email address             |
| Contact       | User's contact number            |
| Occupation    | User's profession or occupation  |
| Description   | Short description about the user |

---

## ⚙️ How It Works

### 1. User fills the form

The user enters all required profile information.

Example:

```text
Profile Photo → https://example.com/profile.jpg
Name          → Rohit
Email         → rohit@gmail.com
Contact       → 9876543210
Occupation    → Web Developer
Description   → I am learning web development.
```

### 2. Form submission

JavaScript listens for the form's `submit` event.

```javascript
form.addEventListener("submit", function(event) {
```

### 3. Prevent page refresh

Normally, submitting a form reloads the page.

The project prevents this using:

```javascript
event.preventDefault();
```

Therefore, the profile card can be created without refreshing the page.

### 4. Get form values

JavaScript reads the values entered by the user:

```javascript
const photo = document.querySelector("#photo").value;
const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const contact = document.querySelector("#contact").value;
const occupation = document.querySelector("#occupation").value;
const description = document.querySelector("#description").value;
```

### 5. Create a new card

A new `<div>` is created dynamically:

```javascript
const card = document.createElement("div");

card.classList.add("profile-card");
```

The user's information is then inserted into the card.

### 6. Add the card to the page

The new card is added using:

```javascript
cardsContainer.appendChild(card);
```

Because `appendChild()` is used, existing cards remain on the page.

For example:

```text
Submit 1

┌───────────────┐
│   Profile 1   │
└───────────────┘


Submit 2

┌───────────────┐  ┌───────────────┐
│   Profile 1   │  │   Profile 2   │
└───────────────┘  └───────────────┘


Submit 3

┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│   Profile 1   │  │   Profile 2   │  │   Profile 3   │
└───────────────┘  └───────────────┘  └───────────────┘
```

### 7. Reset the form

After creating the card:

```javascript
form.reset();
```

This clears all the input fields so the user can create another profile.

---

## 🧠 JavaScript Concepts Practiced

This project helps practice several important JavaScript concepts:

### DOM Selection

```javascript
document.querySelector()
```

Used to select HTML elements.

### Event Handling

```javascript
addEventListener()
```

Used to handle the form submission event.

### `preventDefault()`

```javascript
event.preventDefault();
```

Prevents the browser's default form submission behavior.

### Creating Elements

```javascript
document.createElement()
```

Used to create a new profile card dynamically.

### `classList`

```javascript
card.classList.add("profile-card");
```

Used to add a CSS class to the dynamically created element.

### `innerHTML`

```javascript
card.innerHTML = `...`;
```

Used to insert HTML content into the card.

### `appendChild()`

```javascript
cardsContainer.appendChild(card);
```

Used to add the newly created card to the page.

### Form Reset

```javascript
form.reset();
```

Used to clear the form after submission.

---

## 🔄 Application Flow

```text
User opens the website
        ↓
Fills the profile form
        ↓
Clicks "Create Profile"
        ↓
submit event occurs
        ↓
preventDefault()
        ↓
Get input values
        ↓
Create new profile card
        ↓
Add card to cards container
        ↓
Reset the form
        ↓
User can create another card
```

---

## 🎯 Learning Objectives

The main purpose of this project is to understand:

* How HTML forms work
* How to handle form submission using JavaScript
* How to prevent page refresh
* How to take input values using JavaScript
* How to dynamically create HTML elements
* How to modify the DOM
* How to add multiple elements dynamically
* How to reset a form
* How HTML, CSS, and JavaScript work together

---

## ▶️ How to Run

1. Clone the repository or download the project.

2. Open the project folder.

3. Open:

```text
index.html
```

4. Fill in the profile information.

5. Click:

```text
Create Profile
```

6. A profile card will be generated without refreshing the page.

7. Fill the form again to create another profile card.

---

## 🔮 Future Improvements

Some possible improvements for this project are:

* Add a delete button to each card
* Add an edit button
* Store profiles using `localStorage`
* Add stronger JavaScript validation
* Add profile image fallback if the image URL is invalid
* Add animations when a new card is created
* Add a search feature for profiles
* Add dark mode
* Add card customization options

---

## 📌 Project Status

**Completed Mini Project**

This project was created for practicing **HTML Forms, CSS Layout, JavaScript Events, and DOM Manipulation**.

---

## 👨‍💻 Author

**Rohit**

A beginner-friendly JavaScript DOM manipulation mini project.
