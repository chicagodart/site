const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

//Serve the html file
app.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname, './index.html'));
});

//error checking
app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500).send(err);
});

//port for server
app.listen(1333)


module.exports = app