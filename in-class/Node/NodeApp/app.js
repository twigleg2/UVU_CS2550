const http = require('http');  // imports a pre-built module
const fs = require('fs'); // stands for file system
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write("Error, file not found");
        } else {
            res.write(data);
        }
        res.end();
    })
    return;
});

server.listen(port, error => {
    if (error) {
        console.log("the server didn't start", error);
    } else {
        console.log("Server is listening on port " + port);
    }
});