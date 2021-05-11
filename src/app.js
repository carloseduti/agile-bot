const express = require('express');
const connectDB = require('./database/connection');

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }
    routes() {
        this.express.use(require('./routes.js'));
    }
}

connectDB();


module.exports = new AppController().express;