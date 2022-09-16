module.exports = {

    _config: (key) => {

        let keyArray = key.split('.');

        let config = require('../config/' + keyArray[0]);

        for (let i = 1; i < keyArray.length; i++) {
            if (keyArray[i] !== undefined) {
                config = config[keyArray[i]];
            }
        }

        return config;

    }

}