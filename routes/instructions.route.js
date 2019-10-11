const instructionsRoute = require('express').Router();

const controller = require('../controllers/instructions.controller');

// GET /api/instructions
instructionsRoute.get('/', controller.getAllInstructions);

// GET /api/instructions/:id
instructionsRoute.get('/:id', controller.getOneInstruction);

// POST /api/instructions
instructionsRoute.post('/', controller.createOneInstruction);

// DELETE /api/instructions/:id
instructionsRoute.delete('/:id', controller.deleteOneInstruction);

// PUT /api/instructions/:id
instructionsRoute.put('/:id', controller.updateOneInstruction);


module.exports = instructionsRoute;
