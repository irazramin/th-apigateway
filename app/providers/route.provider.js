const v1Routes = require('../routes/v1');

module.exports = {

    register: (app) => {
        app.use('/api/v1', v1Routes);
    }

}