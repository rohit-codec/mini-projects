# 📝 Notes App

A simple JavaScript Notes App that demonstrates how to use **Browser Storage (`localStorage`)** to save and manage data.

## 🚀 Features

* Add new notes
* Delete individual notes
* Clear all notes
* Notes remain saved after refreshing the page
* Uses `localStorage` for persistent browser storage
* Uses JSON to store JavaScript arrays

## 📁 Project Structure

```text
notes-app/
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
* Browser `localStorage`
* JSON

## 💾 Storage Concept

The application stores notes inside the browser's `localStorage`.

### Save data

```javascript
localStorage.setItem(
    "notes",
    JSON.stringify(notes)
);
```

`localStorage` can only store strings, so `JSON.stringify()` converts the JavaScript array into a JSON string.

### Get data

```javascript
let notes = JSON.parse(
    localStorage.getItem("notes")
) || [];
```

`JSON.parse()` converts the stored JSON string back into a JavaScript array.

### Delete stored data

```javascript
localStorage.removeItem("notes");
```

## 🔄 How It Works

```text
User enters a note
        ↓
    Click Add
        ↓
    notes.push()
        ↓
 JSON.stringify()
        ↓
   localStorage
        ↓
   Page refresh
        ↓
localStorage.getItem()
        ↓
    JSON.parse()
        ↓
 Display notes
```

## ▶️ How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a browser.
4. Add some notes.
5. Refresh the page.
6. Your notes will still be there.

You can also open the project using **VS Code + Live Server**.

## 🧠 JavaScript Concepts Practiced

This project helps practice:

* `localStorage`
* `setItem()`
* `getItem()`
* `removeItem()`
* `JSON.stringify()`
* `JSON.parse()`
* Arrays
* Functions
* DOM manipulation
* Event listeners
* `forEach()`
* `push()`
* `splice()`

## 🎯 Future Improvements

Try adding these features yourself:

* ✏️ Edit notes
* 🔍 Search notes
* 📅 Add date and time
* 🏷️ Add categories
* 🌙 Dark mode
* 🔢 Character counter
* 📌 Pin important notes

## 📌 Learning Goal

The main goal of this project is to understand how **JavaScript can store and retrieve data using `localStorage`**, and how JSON is used to convert between JavaScript objects/arrays and strings.

---

**Made for practicing JavaScript Browser Storage 🚀**
