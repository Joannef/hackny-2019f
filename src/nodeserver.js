const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// bodyParser for the json file.
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post("/picture", (req, res) => {
  console.log('Server info', req.body);

  // npm install @google-cloud

  // look up express, get json body from post request
  const predictions = req.body; //request body and store in 'predictions'


  res.json(predictions);

  // express, save to local system or how to save file to local machine


  // use App2 to send file to gcp
  // return what gcp sends. 
})



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType,
//   ContentType: application/json,
//   Authorization: 'jayq-591@asldetector.iam.gserviceaccount.com'
// });

// $.post( "ajax/test.html", function( data ) {
//   $( ".result" ).html( data );
// });

// const getPrediction = () => {
//   return (
//     <h1>hello, World!</h1>
//   );
// };

// app.post("/books", (req, res) => {
//   console.log('post:books!', req.body);
//   const newBook = req.body;

//   // save object to database (don't forget the id)
//   newBook.id = booksThatReallyShouldBeInADb.length;
//   booksThatReallyShouldBeInADb.push(newBook); //our database aka our array.
//   // response with new object 

  //res.json(newBook);
// });