var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

// import and instantiate the aylien SDK
var AYLIENTextAPI = require('aylien_textapi');

// set aylien API crdentials
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


// GET url article sentiment analysis from aylien api
app.get('/api', (req, res) => {
    // Get input from query parameter
    let url = req.query.input;

    // Get sentiment api
    textapi.sentiment({
        url: url,
        mode: 'article'
      }, function(error, response) {
        if (error === null) {
            res.send(response);
        }
      });
  });

// GET test tesponse from mock api
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})