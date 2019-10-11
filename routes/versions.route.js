const versionsRoute = require('express').Router();

const controller = require('../controllers/versions.controller');

// GET /api/versions
versionsRoute.get('/', controller.getAllVersions);

// GET /api/versions/:id
versionsRoute.get('/:id', controller.getOneVersion);

// POST /api/versions
versionsRoute.post('/', controller.createOneVersion);

// DELETE /api/versions/:id
versionsRoute.delete('/:id', controller.deleteOneVersion);

// PUT /api/versions/:id
versionsRoute.put('/:id', controller.updateOneVersion);


module.exports = versionsRoute;
