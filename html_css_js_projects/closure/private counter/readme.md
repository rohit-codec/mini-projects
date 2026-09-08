# 🔐 Private Counter — JavaScript Closure Mini Project

A simple **Private Counter** mini project built using **HTML, CSS, and JavaScript** to understand the concept of **Closures** and **data privacy** in JavaScript.

---

## 📌 About the Project

This project demonstrates how JavaScript **closures** can be used to create a private variable.

The counter value is stored inside the `createCounter()` function and cannot be directly accessed from outside.

Instead, the counter can only be modified through public methods:

* `increment()`
* `decrement()`
* `reset()`
* `getCount()`

---

## 🎯 Features

* ➕ Increment the counter
* ➖ Decrement the counter
* 🔄 Reset the counter
* 🔒 Private counter variable
* 🧠 Demonstrates JavaScript Closures
* 📦 Uses a factory function
* 🖥️ Simple and responsive UI

---

## 🧠 Concepts Learned

### 1. Closures

A closure allows a function to remember and access variables from its outer scope even after the outer function has finished executing.

```javascript
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            return count;
        }
    };
}
```

The returned functions remember the `count` variable.

---

### 2. Private Variables

The `count` variable cannot be directly accessed from outside:

```javascript
const counter = createCounter();

console.log(counter.count);
```

Output:

```text
undefined
```

The only way to interact with it is through the provided methods:

```javascript
counter.increment();

console.log(counter.getCount());
```

Output:

```text
1
```

---

### 3. Encapsulation

The project demonstrates **encapsulation** by keeping the counter's internal state private and exposing only the required operations.

```text
Private State
     │
     ▼
  count 🔒
     │
     ├── increment()
     ├── decrement()
     ├── reset()
     └── getCount()
```

---

## 📂 Project Structure

```text
private-counter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

The `createCounter()` function creates a private `count` variable.

```javascript
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        reset() {
            count = 0;
        },

        getCount() {
            return count;
        }
    };
}
```

When we create a counter:

```javascript
const counter = createCounter();
```

the returned methods form a **closure** over the `count` variable.

Therefore, even though `createCounter()` has finished executing, its methods can still access `count`.

---

## 🚀 Running the Project

### Method 1 — Directly in Browser

1. Download or clone the project.
2. Open the project folder.
3. Double-click `index.html`.
4. The counter will open in your browser.

### Method 2 — VS Code

Open the project in VS Code and use the **Live Server** extension.

---

## 🧪 Example

```javascript
const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount());
```

Output:

```text
1
```

---

## 🔥 Multiple Private Counters

Closures allow us to create multiple independent counters:

```javascript
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();

counter2.increment();

console.log(counter1.getCount()); // 2
console.log(counter2.getCount()); // 1
```

Each counter has its own private `count` variable.

---

## 📚 Key Takeaway

> **A closure allows a function to remember and access variables from its outer lexical scope.**

This project shows how closures can be used for **private state and encapsulation** in JavaScript.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)

---

## 🚀 Future Improvements

Possible upgrades:

* [ ] Custom starting value
* [ ] Custom increment/decrement step
* [ ] Minimum and maximum limits
* [ ] Undo functionality
* [ ] Counter history
* [ ] Multiple counters
* [ ] Dark/Light mode
* [ ] LocalStorage support

---

## 👨‍💻 Author

**Rohit**

A JavaScript mini project focused on learning **Closures and Encapsulation**.
