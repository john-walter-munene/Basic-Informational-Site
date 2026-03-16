const http = require('node:http');
const fs = require('fs/promises');
const path = require('path');

const PORT = 8080;
const BASE_DIRECTORY = 'C:/Users/HomePC/Desktop/My Projects/Basic Information Site/Basic-Informational-Site/src';

const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact-me': 'contact-me.html',
};

const server = http.createServer(async (req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');

    const routeFile = routes[url];
    const filePath = path.join(BASE_DIRECTORY, routeFile || '404.html');

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        res.statusCode = routeFile ? 200 : 404;
        res.end(data);
    } catch (error) {
        console.log(error);
        res.statusCode = 500;
        res.end('<h1>500 Server Error Loading File</h1>');
    }
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));