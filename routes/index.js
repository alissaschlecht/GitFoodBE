const routes = require('express').Router();
const bodyParser = require('body-parser');

routes.use(bodyParser.json());

const dishes = require('./dishes.route');
const versions = require('./versions.route');
const ingredients = require('./ingredients.route');
const instructions = require('./instructions.route');

routes.use('/dishes', dishes);
routes.use('/versions', versions);
routes.use('/ingredients', ingredients);
routes.use('/instructions', instructions);

module.exports = routes;
