const path = require('path');
const express = require('express');
const app = express();

let api_1 = require('./router/api_1');

app.use('/www', express.static(path.join(__dirname, 'www')));
app.use('/api_1', api_1);

app.get('/', function (req, res) {
    res.send('Hello Express!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
