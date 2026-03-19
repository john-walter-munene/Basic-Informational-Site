require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = Number(process.env.PORT) || 8080;
const BASE_DIRECTORY = 'C:/Users/HomePC/Desktop/My Projects/Basic Information Site/Basic-Informational-Site/src';

const app = express();

// Ideal express way app.gets...
// // Home
// app.get('/', (req, res) => {
//     res.sendFile(path.join(BASE_DIRECTORY, 'index.html'));
// });

// // About
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(BASE_DIRECTORY, 'about.html'));
// });

// // Contact
// app.get('/contact-me', (req, res) => {
//     res.sendFile(path.join(BASE_DIRECTORY, 'contact-me.html'));
// });

// // 404 fallback.
// app.use((req, res) => {
//     res.status(404).sendFile(path.join(BASE_DIRECTORY, '404.html'));
// });

// Above code works, but I prefer a refactor to...

const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact-me': 'contact-me.html',
};

app.get(/.*/, (req, res) => {
    const url = req.path;

    res.setHeader('Content-Type', 'text/html');

    const routeFile = routes[url];
    const filePath = path.join(BASE_DIRECTORY, routeFile || '404.html');

    try {
        res.status(routeFile ? 200 : 404);
        res.sendFile(filePath);
    } catch (error) {
        console.log(error);
        res.status(500).send('<h1>500 Server Error Loading File</h1>');
    }
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));