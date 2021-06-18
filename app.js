const express = require('express');
const connectDB = require('./src/database/connection');

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
        this.express.use(require('./src/routes'));
    }
}

connectDB();


module.exports = new AppController().express;