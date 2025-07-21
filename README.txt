# Quran Verse Finder Web App

## Overview
This website allows users to search for any verse from the Quran by entering the Surah and Ayah number (e.g., `1:1`). It displays the Arabic text, provides audio recitation, and shows translations in Urdu or English. The site is beautifully styled, fully responsive, and features smooth transitions and animations for a modern user experience.

## Features
- **Search by Verse:** Enter Surah:Ayah (e.g., 2:255) to get the verse.
- **Arabic Display:** Shows the verse in Arabic with a styled card.
- **Audio Recitation:** Plays the verse recitation (Alafasy) with a smooth fade-in audio player.
- **Translation Dropdown:** Select Urdu or English translation from a stylish, animated dropdown.
- **Responsive Design:** Works on all devices, with modern transitions and hover effects.

## How It Works
1. **User Input:** Enter the Surah and Ayah number in the input box and click "Search".
2. **API Fetch:** The app fetches the Arabic text and audio from the Al Quran Cloud API.
3. **Display:** The Arabic verse and audio appear with smooth animations.
4. **Translation:** Select a language from the dropdown to fetch and display the translation.

## Technologies Used
- **HTML5** for structure
- **CSS3** for modern, responsive, and animated design
- **JavaScript (ES6)** for interactivity and API calls
- **Axios** for HTTP requests
- **Al Quran Cloud API** for Quranic data and audio

## How to Make This Website
1. **Create the Project Structure:**
   - `index.html` for the main page
   - `style.css` for all styles
   - `script.js` for all JavaScript logic
2. **Design the Layout:**
   - Use HTML to create input, button, audio, and display sections
   - Add a dropdown for translation selection
3. **Style the Site:**
   - Use CSS for layout, colors, transitions, and responsiveness
   - Add custom styles for dropdown and audio
4. **Add Functionality:**
   - Use JavaScript to handle search, fetch data from the API, and update the DOM
   - Add event listeners for search and translation selection
   - Show/hide audio player as needed
5. **Test Responsiveness:**
   - Use media queries to ensure the site looks good on all devices
6. **API Reference:**
   - [Al Quran Cloud API Documentation](https://alquran.cloud/api)

## How to Run
1. Download or clone the project files.
2. Open `index.html` in your browser.
3. Enter a verse (e.g., `1:1`) and click Search.
4. Listen to the audio and view translations as needed.

---

**Enjoy exploring the Quran with a beautiful, interactive web experience!**
