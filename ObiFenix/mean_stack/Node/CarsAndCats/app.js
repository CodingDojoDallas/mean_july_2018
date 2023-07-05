var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response) => {
    console.log('URL requested: ', request.url);
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/stylesheets/btmin.css') {
        fs.readFile('stylesheets/btmin.css', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars/new') {
        fs.readFile('views/new.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car1') {
        fs.readFile('images/cars/car1.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car2') {
        fs.readFile('images/cars/car2.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car3') {
        fs.readFile('images/cars/car3.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car4') {
        fs.readFile('images/cars/car4.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car5') {
        fs.readFile('images/cars/car5.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car6') {
        fs.readFile('images/cars/car6.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat1') {
        fs.readFile('images/cats/cat1.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat2') {
        fs.readFile('images/cats/cat2.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat3') {
        fs.readFile('images/cats/cat3.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat4') {
        fs.readFile('images/cats/cat4.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat5') {
        fs.readFile('images/cats/cat5.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat6') {
        fs.readFile('images/cats/cat6.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat7') {
        fs.readFile('images/cats/cat7.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat8') {
        fs.readFile('images/cats/cat8.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat9') {
        fs.readFile('images/cats/cat9.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/carcat') {
        fs.readFile('images/carcat.jpg', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else {        response.writeHead(404);
        console.log('File not found!!!');
    }
});

server.listen(8000);
console.log('Running in localhost at port 8000');
