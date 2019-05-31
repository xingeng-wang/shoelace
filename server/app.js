const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const list_user_data = require('./routes/list_user_data');
const create_user_data = require('./routes/create_user_data');

const app = express();


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../dist/shoelace')));
app.use('/api/v1/list-user-data', list_user_data);
app.use('/api/v1/create-user-data', create_user_data);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/shoelace/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
