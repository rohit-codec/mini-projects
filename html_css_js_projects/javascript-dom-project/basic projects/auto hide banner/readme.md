# Auto Hide Banner

A mini HTML, CSS and JavaScript project that displays a banner
and automatically hides it after a few seconds.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- Displays a banner at the top of the page
- Close button to hide the banner manually
- Automatically hides the banner after 5 seconds
- Smooth hide animation

## Project Structure

auto-hide-banner/
│
├── index.html
├── style.css
├── script.js
└── README.md

## How It Works

### HTML

Creates the banner, close button and page content.

### CSS

The `.hide` class makes the banner disappear:

```css
.banner.hide {
    opacity: 0;
    transform: translateY(-100%);
}