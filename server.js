const { app } = require('./app');
const { _config } = require('./libraries/loadConfig');

app.listen(_config('app.port'), () =>{
    console.log(`App is listen at ${_config('app.port')}`);
});