const ingredientsRoute = require('express').Router();

const controller = require('../controllers/ingredients.controller');

// GET /api/ingredients
ingredientsRoute.get('/', controller.getAllIngredients);

// GET /api/ingredients/:id
ingredientsRoute.get('/:id', controller.getOneIngredient);

// POST /api/ingredients
ingredientsRoute.post('/', controller.createOneIngredient);

// DELETE /api/ingredients/:id
ingredientsRoute.delete('/:id', controller.deleteOneIngredient);

// PUT /api/ingredients/:id
ingredientsRoute.put('/:id', controller.updateOneIngredient);


module.exports = ingredientsRoute;
