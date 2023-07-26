.0.const http = require('http');
const fs = require('fs');
const port = 8080;

const requestHandler = (req, res) => {
    let fileName = "";
    switch (req.url) {
        case '/':
            fileName = "index.html";
            break;
        case '/index':
            fileName = "index.html";
            break;
        case '/blog':
            fileName = "blog.html";
            break;
        case '/about':
            fileName = "about.html";
            break;
        case '/gallery':
            fileName = "gallery.html";
            break;
        case '/contact':
            fileName = "contact.html";
            break;
    }
    fs.readFile(fileName, (err, result) => {
        if (!err) {
            res.end(result)
        }
    })
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (!err) {
        console.log("server is start on port : " + port);
    }
})

