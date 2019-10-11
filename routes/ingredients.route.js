const ingredientsRoute = require('express').Router();

const controller = require('../controllers/ingredients.controller');

// GET /api/ingredients
ingredientsRoute.get('/', controller.getAllIngredients);

// GET /api/ingredient/:id
ingredientsRoute.get('/:id', controller.getOneIngredient);

// POST /api/ingredient
ingredientsRoute.post('/', controller.createOneIngredient);

// DELETE /api/ingredient/:id
ingredientsRoute.delete('/:id', controller.deleteOneIngredient);

// PUT /api/ingredient/:id
ingredientsRoute.put('/:id', controller.updateOneIngredient);


module.exports = ingredientsRoute;
