const express = require('express');
const app = express();

const kernel = require('./app/kernel');

kernel.boot(app);

module.exports = {
    app
}