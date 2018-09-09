//var myDT = require('./mydatetimemodule');
//const is better here so we don't accidentally overwrite it.
const myDT = require('./mydatetimemodule');

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + myDT.myDateTime());
    res.end();
}).listen(8080);