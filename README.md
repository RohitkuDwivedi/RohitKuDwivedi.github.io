# Rohit Photo Gallery – GitHub Pages

This repository hosts a simple, automated photo gallery website built using **GitHub Pages** and client-side JavaScript.

## 🌐 Website Link

The gallery can be accessed at:

**https://rohitkudwivedi.github.io**

---

## 📌 Concept

The gallery is designed to be easily maintainable without modifying HTML.

### How it works:

- All images are stored inside the `photos/` folder.
- Image filenames follow a numeric pattern:  
  `1.jpeg`, `2.jpeg`, `3.jpeg`, ...
- Descriptions for each photo are stored in `description.json`.
- When the page loads, `script.js`:
  - Fetches the JSON file
  - Loops through all keys
  - Automatically generates the gallery grid

---

## 📁 Folder Structure

