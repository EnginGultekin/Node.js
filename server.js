const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>INDEX PAGE</h1>");
    } else if(url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>About Page</h2>");
    } else if(url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Contact Page</h2>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 SAYFA BULUNAMADI</h1>");
    }

    res.end();
})

const port = 5000;

server.listen(port, () => {
    console.log(`The server is started at port ${port}.`)
})