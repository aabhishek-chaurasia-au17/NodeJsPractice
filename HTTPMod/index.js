const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url == "/"){ 
        res.end('Hello This is Home page')
    }else if (req.url == "/about"){
        res.end("Hello this is About sides");
    }else if (req.url == "/contact"){
        res.end("Hello this is contact sides");
    }else {
        res.writeHead(404, {'content-type': "text/html"})
        res.end("<h1>404 Page doesn't exist</h1>");
    }

});

server.listen(8000, () =>{
    console.log('listing to port no 8000');
});
