const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, "public", "index.html");

    if (
        req.url === "/" ||
        req.url === "/about" ||
        req.url === "/contact" ||
        req.url === "/services" ||
        req.url === "/login"
    ) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end("404 Page Not Found ❌");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});