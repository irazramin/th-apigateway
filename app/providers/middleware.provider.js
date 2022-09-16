const express = require('express');

module.exports = {

    register: (app) => {
        app.use(express.json());
    }

}