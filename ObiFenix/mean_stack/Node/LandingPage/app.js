var http = require('http');         // get the http module:
var fs = require('fs');             // fs module allows us to read and write content for responses!!
var server = http.createServer(function(request, response) {         // creating a server using http module:
   console.log('client request URL: ', request.url);                 // see what URL the clients are requesting:

   // ======================================
   // < Required Routes Handler/Middleware >
   // ======================================

   if (request.url === '/') {                                        // this is how we do routing:
      fs.readFile('templates/index.html', 'utf8', function(errors, contents) {
         response.writeHead(200, { 'Content-Type': 'text/html' });   // send data about response
         response.write(contents);  // send response body
         response.end();            // finished!
      });
   }

   else if (request.url === '/ninjas') {
      fs.readFile('templates/ninjas.html', 'utf8', function(errors, contents) {
         response.writeHead(200, { 'Content-Type': 'text/html' });   // send data about response
         response.write(contents);  // send response body
         response.end();            // finished!
      });
   }

   else if (request.url === '/dojos/new') {
      fs.readFile('templates/dojos.html', 'utf8', function(errors, contents) {
         response.writeHead(200, { 'Content-Type': 'text/html' });   // send data about response
         response.write(contents);  // send response body
         response.end();            // finished!
      });
   }

   else {
        // handles request didn't match anything:
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

server.listen(8000);                                // tell your server which port to run on
console.log("Running in localhost at port 8000");   // print to terminal window
