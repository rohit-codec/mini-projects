# Character Counter

A simple mini project built using **HTML, CSS, and JavaScript** that counts the number of characters entered in a textarea in real time.

## 🚀 Features

* Counts characters while typing
* Displays the current character count
* Maximum limit of 200 characters
* Uses the `input` event
* Simple and responsive UI

## 📁 Project Structure

```text
character-counter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Input Event

## ⚙️ How It Works

JavaScript listens for the `input` event:

```javascript
message.addEventListener("input", function () {
    const characters = message.value.length;
    count.textContent = characters;
});
```

Whenever the user types or removes a character, the counter is updated automatically.

The textarea uses:

```html
<textarea maxlength="200"></textarea>
```

to limit the input to 200 characters.

## 🎯 Concepts Practiced

* `addEventListener()`
* `input` event
* `.value`
* `.length`
* DOM manipulation
* `maxlength`

## ▶️ How to Run

Open `index.html` in your browser and start typing in the textarea.

## 📌 Project Status

**Completed Mini Project** — created for practicing JavaScript DOM manipulation and input events.
