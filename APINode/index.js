const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    const data = fs.readFileSync(`${__dirname}/userapi.json`,'utf-8');
    const objData = JSON.parse(data)

    if (req.url == "/"){ 
        res.end('Hello This is Home page')
    }else if (req.url == "/about"){
        res.end("Hello this is About page");
    }else if (req.url == "/contact"){
        res.end("Hello this is Contact Page");
    }else if (req.url == "/userapi"){
        fs.readFile(`${__dirname}/userapi.json`, 'utf-8', (err, data) => {
            res.writeHead(200,{'content-type': 'application/json'})
            res.end(objData.message);
    });
    }else {
        res.writeHead(404, {'content-type': "text/html"})
        res.end("<h1>404 Page doesn't exist</h1>");
    }

});

server.listen(5000, () =>{
    console.log('listing to port no 5000');
});
