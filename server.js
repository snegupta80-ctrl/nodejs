const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end("hello world");
    }
    else if (req.url === "/about") {nodeman 
        res.end("about page");
    }
    else {
        res.end("page not found");
    }

});
server.listen(3000, () => {
    console.log("server is running on port 3000");
})

