const database = require("./providers/database.provider");
const middleware = require("./providers/middleware.provider");
const routes = require('./providers/route.provider')

module.exports = {

    boot: (app) => {

        database.connect();

        middleware.register(app);

        routes.register((app));

    }

}
