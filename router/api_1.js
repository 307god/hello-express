const express = require('express');
const api = express.Router();

api.get('/get' ,function (req, res) {
    let data = {
        name: 'get_value',
    };
    // Object.assign(data, req.query);
    res.send(JSON.stringify(data));
});

api.post('/post' ,function (req, res) {
    let data = {
        name: 'post_value'
    };
    // Object.assign(data, req.body);
    res.send(JSON.stringify(data));
});

module.exports = api;