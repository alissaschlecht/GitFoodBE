const dishesRoutes = require('express').Router();

const controller = require('../controllers/dishes.controller');

// GET /api/dishes
dishesRoutes.get('/', controller.getAllDishes);

// POST /api/dishes
dishesRoutes.post('/', controller.createOneDish);

// DELETE /api/dishes/:id
dishesRoutes.delete('/:id', controller.deleteOneDish);

// DELETE /api/dishes/:id
dishesRoutes.put('/:id', controller.updateOneDish);


module.exports = dishesRoutes;
