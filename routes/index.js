const routes = require('express').Router();
const bodyParser = require('body-parser');

routes.use(bodyParser.json());

const dishes = require('./dishes.route');

routes.use('/dishes', dishes);

module.exports = routes;
