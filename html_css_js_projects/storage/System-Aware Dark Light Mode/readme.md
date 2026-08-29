# System-Aware Dark Light Mode

A simple JavaScript mini project that demonstrates how to create a **Dark/Light Mode toggle** with **system color preference detection** and **localStorage**.

When the user visits the page for the first time, the project checks the color scheme preferred by the browser and applies the matching theme. After that, the selected theme is saved in `localStorage`, so the user's preference is remembered even after closing or reopening the browser.

## Features

* Detects the browser's preferred color scheme.
* Automatically selects Dark or Light Mode on the first visit.
* Provides a button to manually switch between Dark and Light Mode.
* Saves the selected theme using `localStorage`.
* Restores the saved theme when the page is opened again.
* The saved theme remains available even after closing the browser.
* Uses CSS transitions for a smoother theme change.
* Works without a backend or database.

## Technologies Used

* HTML5
* CSS3
* JavaScript

## How It Works

### 1. Detecting the System Theme

JavaScript uses `window.matchMedia()` with the `prefers-color-scheme` media feature:

```javascript
window.matchMedia("(prefers-color-scheme: dark)")
```

This allows the browser to tell the webpage whether the preferred color scheme is Dark or Light.

The project checks:

```javascript
systemMode.matches
```

If it returns `true`, Dark Mode is preferred. Otherwise, Light Mode is preferred.

### 2. First Visit

When the page is opened, JavaScript checks whether a theme already exists in `localStorage`.

If no theme is saved:

```text
No saved theme
      ↓
Check browser/system preference
      ↓
Apply Dark or Light Mode
      ↓
Save the theme
```

For example:

```text
System = Dark
Page = Dark
localStorage = "dark"
```

### 3. Returning to the Page

If a theme already exists in `localStorage`, the project uses that saved theme instead of checking the system preference again.

```text
Saved theme exists
       ↓
Read localStorage
       ↓
Apply saved theme
```

For example:

```text
Saved theme = Light
System theme = Dark

       ↓

Page remains Light
```

This prevents the user's saved preference from being unexpectedly changed.

### 4. Toggle Button

The button switches between the two themes:

```text
Dark → Light
Light → Dark
```

After switching, the new theme is saved:

```javascript
localStorage.setItem("theme", newTheme);
```

Therefore, the user's latest choice is remembered when the page is opened again.

## localStorage

`localStorage` is a browser storage mechanism that stores data as key-value pairs.

This project stores the selected theme using:

```javascript
localStorage.setItem("theme", "dark");
```

The saved value can be retrieved using:

```javascript
localStorage.getItem("theme");
```

For this project, the stored value can be either:

```text
"dark"
```

or

```text
"light"
```

The data remains available even after refreshing or closing and reopening the browser, unless the site's stored data is cleared.

## Project Flow

The complete flow of the project is:

```text
              Open Page
                  │
                  ▼
        Is theme saved?
          /             \
        No               Yes
        │                 │
        ▼                 ▼
 Check browser       Get saved theme
 system preference        │
        │                 │
        ▼                 │
 Apply theme             │
        │                 │
        ▼                 │
 Save theme ◄─────────────┘
        │
        ▼
     Page Ready
        │
        ▼
    Toggle Button
        │
        ▼
 Change Theme
        │
        ▼
 Save New Theme
```

## Project Structure

```text
system-aware-dark-light-mode/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the webpage and the toggle button.

### `style.css`

Contains the styling for Dark Mode, Light Mode, button styles, and transitions.

### `script.js`

Handles:

* System color preference detection
* Theme selection
* Dark/Light Mode switching
* DOM manipulation
* `localStorage`
* Event handling

### `README.md`

Contains the project documentation.

## How to Run

### Using VS Code

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The project will open in your browser.

You can also open `index.html` directly in a browser without Live Server.

## Testing the Project

You can test the project using the following steps:

### Test 1: First Visit

1. Clear the project's localStorage.
2. Set the browser's preferred color scheme to Dark.
3. Open the page.
4. The page should open in Dark Mode.

Then repeat with Light Mode.

### Test 2: Toggle

1. Open the page.
2. Click **Toggle Mode**.
3. The page should change from Dark to Light or Light to Dark.
4. Refresh the page.
5. The selected theme should remain.

### Test 3: Closing the Browser

1. Select a theme.
2. Close the browser or tab.
3. Open the project again.
4. The previously saved theme should be restored.

## Concepts Practiced

* DOM Manipulation
* `window.matchMedia()`
* `prefers-color-scheme`
* `localStorage`
* `localStorage.setItem()`
* `localStorage.getItem()`
* `classList.add()`
* `classList.remove()`
* Event Listeners
* Conditional Statements
* Functions
* Dark/Light Mode
* Browser Storage

## Important Note

The system color preference is used **only when no theme has been saved before**.

After a theme is saved, the project uses the saved preference. Changing the system/browser theme later will not automatically overwrite the user's saved choice.

To test the first-visit system detection again, clear the project's `localStorage` and reload the page.

## Future Improvements

Possible improvements for this project include:

* Add a **Use System Theme** option.
* Save the user's preference using a more advanced theme system.
* Add icons for Dark and Light Mode.
* Add more themes such as Blue, Green, or Purple.
* Improve the UI with animations.
