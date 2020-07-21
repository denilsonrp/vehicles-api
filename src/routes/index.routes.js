const express = require('express');

const routes = express.Router();

const vehiclesRouter = require('./vehicles/index.routes');

routes.use('/vehicles', vehiclesRouter);

module.exports = routes;
