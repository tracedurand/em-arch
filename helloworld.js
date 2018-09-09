var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(__filename + '<br>');
    res.write(__dirname + '<br>');
    res.end('Hello World!!!');
}).listen(8080);