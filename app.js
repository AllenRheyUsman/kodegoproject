// const express=require('express');
// const bodyparser = require ("body-parser");
// const request = require ("request");

// const app = express();
// app.use(express.static("public"))
// app.get("/", function(req, res){
//     res.sendFile(__dirname+'/log_in.html')

// })
// app.listen(3000, function() {
//     console.log('Server is running on port 3000');
//   });
  

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Define route for the root URL

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Define route for the login page
app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/public/log_in.html');
});

// Define route for handling form submission
app.post('/submit', function(req, res) {
  // Handle form submission here
});

// Start the server listening on port 3000
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
console.log(__dirname);



// const express = require ("express");
// const bodyParser = require ("body-parser");
// const request = require ("request");

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req , res) {
//  res.sendFile(__dirname + "/index.html");
// });


// app.post("/", function(req, res){
//     var userName = req.body.uName;
//     var email = req.body.email;
//     var password = req.body.pWord;
   
//     console.log(userName, email, password);

// })

// app.listen(3000, function(){
//     console.log("Server is running on port 3000");

// })