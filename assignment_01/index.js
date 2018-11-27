const http = require('http');
const url = require('url');

// Creating / Initializing the server
const server = http.createServer( function(req, res) {
    const method = req.method;
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    // removing begining & trailing slashes from the path name
    const trimmedPath = pathname.replace(/^\/+|\/+$/g, '');
    // handling 'hello' path
    if (trimmedPath === 'hello') {
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end("Hi there");
    } else {
        res.end('Ooops! Something went wrong. Try /hello');
    }
});

// Sarting the server
server.listen( 3000, function(err) {
  console.log('Node JS server is listening on port 3000');
} );
