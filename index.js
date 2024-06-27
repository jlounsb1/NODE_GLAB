const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url ==="/") {
        res.write('<h1 style="color:red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
    } else if (req.url =="/about") {
        res.write('<h1 style="color:green">I mean, I am pretty boring...</h1>');
        res.write('<p>I could give you a three hour lecture on how to craft a bow in Path of Exile if you want to pass the time.</p>');
    } else {
        res.statusCode = 404;
        res.write("Error: 404 Not Found. You done goofed!!");
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});