const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();
const ErrHandle = require('./ErrorClass/ErrorHandle');

// Basic Express Configuration
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Route Handlers with Error Handling
app.get('/', (req, res, next) => {
    try {
        res.redirect('/Quran/Landing');
    } catch (error) {
        next(new ErrHandle(500, "Failed to load home page"));
    }
});

app.get('/Quran', async (req, res, next) => {
    try {
        res.render("./Redirects/Home.ejs");
    } catch (error) {
        next(new ErrHandle(500, "Failed to load home page"));
    }
});

app.get('/Quran/Landing', async (req, res, next) => {
    try {
        res.render("./Redirects/Landing.ejs");
    } catch (error) {
        next(new ErrHandle(500, "Failed to load landing page"));
    }
});

// 404 Handler - For undefined routes
app.get('/Quran/:any', (req, res, next) => {
    next(new ErrHandle(404, `Page Not Found - ${req.originalUrl}`));
});

app.get('/:any', (req, res, next) => {
    next(new ErrHandle(404, `Page Not Found - ${req.originalUrl}`));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("./Redirects/error.ejs", { statusCode, message });
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// Export the Express app for Vercel
module.exports = app;