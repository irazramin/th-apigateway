const mongoose = require('mongoose');
const { _config } = require('../../libraries/loadConfig');

module.exports = {

    connect: () => {
        const hostname = _config('database.mongo.hostname');
        const port = _config('database.mongo.port');
        const database = _config('database.mongo.database');
        mongoose
            .connect(`mongodb://${hostname}:${port}/${database}`)
            .then(() => {
                console.log('Mongo connected');
            }).catch(err => {
            console.log(err)
        });
    }

}