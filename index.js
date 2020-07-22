const dotenv = require ('dotenv');
require('dotenv').config();

const app = require ('./app');

function init() {
    app.listen(app.get('port'));
    console.log('Server on port', 5000);
};

init();