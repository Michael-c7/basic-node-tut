const http = require("http")

// para1:incoming request, para2 what you send back
const server = http.createServer((req, res) => {
    if(req.url === "/" ) {
        res.end("This is the home page")
        return;
    }
    if(req.url === "/about" ) {
        res.end("This is the about page")
        return;
    }

    res.end(`
    <h1>This page does not exist.</h1>
    <a href="/">Go home</a>
    `)

})

// sets up the server on localhost:5000
server.listen(5000)