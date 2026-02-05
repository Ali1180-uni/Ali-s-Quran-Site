# Ali's Quran Site
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Ali1180-uni/Ali-s-Quran-Site)

An elegant and modern web application dedicated to helping users read, listen to, and understand the Quran and Hadith. This project aims to provide a seamless and accessible platform for exploring Islamic texts with features like verse searching, audio recitations, and multi-language translations.

## Features

*   **Quran Verse Finder**: Search for any verse in the Quran by Surah and Ayah number (e.g., `2:255`).
*   **Audio Recitations**: Listen to the beautiful recitation of the Quran for each verse (reciter: Al-Afasy).
*   **Multi-Language Translations**: View translations of Quranic verses in English (Muhammad Asad) and Urdu (Jalandhry).
*   **Hadith Collections**: Browse chapters from major Hadith books, including Sahih Bukhari and Sahih Muslim.
*   **Modern UI/UX**: A beautifully designed, responsive interface with smooth animations and a spiritual aesthetic built with Tailwind CSS and Framer Motion.
*   **Smooth Scrolling**: Enhanced user experience with Lenis for smooth scrolling effects.

## Tech Stack

*   **Framework**: React
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Routing**: React Router
*   **Animations**: Framer Motion
*   **API Client**: Axios
*   **Forms**: React Hook Form
*   **Linting**: ESLint

## APIs Used

This project relies on the following free and public APIs:

*   **Quran**: [Al-Quran Cloud API](https://alquran.cloud/api) for verse text, audio, and translations.
*   **Hadith**: [Hadith API](https://hadithapi.com) for Hadith collections and chapters.

## Local Development

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ali1180-uni/ali-s-quran-site.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd ali-s-quran-site
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### Available Scripts

*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the application for production.
*   `npm run lint`: Lints the project files using ESLint.
*   `npm run preview`: Serves the production build locally for preview.

## Project Structure

The project is organized into the following main directories:

*   `public/`: Contains static assets like the favicon and images.
*   `src/`: The main source code of the application.
    *   `assets/`: Image assets used within components.
    *   `App.jsx`: The root component that defines the routing structure.
    *   `main.jsx`: The entry point of the React application.
    *   `index.css`: Global styles and Tailwind CSS imports.
*   `Components/`: Contains all the reusable React components, such as `Navbar`, `Footer`, `Verse`, `Hadees`, etc.