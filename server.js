'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// Serve the html file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// error checking
app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500).send(err);
});

// port for server
app.listen(1333);


module.exports = app;
