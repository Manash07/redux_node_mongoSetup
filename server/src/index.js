const http = require("http");

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  // api method
  console.log(req.body); // When body is not stringify in client side it shows undefined / express does not allow body by default
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// How this page was created ??

/* 

=> npm init -y

=> npm install --save-dev nodemon

=> Inside index.js folder which is this or copied from expressjs.com 

{ 
    
    const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

}



=> Inside package.json 


"scripts": {
  "start": "nodemon app.js"
},


=> nodemon index.js







*/
