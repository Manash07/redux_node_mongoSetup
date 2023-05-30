const http = require("http");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.post("/user", async (req, res) => {
  // api method
  // When body is not stringify in client side it shows undefined / express does not allow body by default

  let user = new userDetail(); // Created a class through which change in database is made

  user.userName = req.body.userName;
  user.token = req.body.token;
  const doc = await user.save();
  console.log(doc);
  res.json(doc);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/redux");
  console.log("Database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  // schema is template of requirement
  userName: String,
  token: String,
});

const userDetail = mongoose.model("User", userSchema); // class made from schema is model and here User is the name of model

// Now go back to post

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


=> mongoose installed -> npm install mongoose --save




*/
