const dishesService = require('../services/dishes.service.js');

const getAllDishes = async (req, res) => {
  try {
    const dishes = await dishesService.getAllDishes();

    return res.status(200).json({
      dishes
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const createOneDish = async (req, res) => {
  if (!req.body.name) {
    return res.status(500).json({
      error: 'A name is mandatory to create a dish',
    });
  }
  
  try {
    const dish = await dishesService.createOneDish(req.body.name);

    return res.status(200).json({
      dish
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const getOneDish = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to get a dish',
    });
  }
  
  try {
    const dish = await dishesService.getOneDish(req.params.id);

    return res.status(200).json({
      dish
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const deleteOneDish = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to delete a dish',
    });
  }
  
  try {
    await dishesService.deleteOneDish(req.params.id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneDish = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to update a dish',
    });
  }

  if (!req.body.name) {
    return res.status(500).json({
      error: 'A name is mandatory to update a dish',
    });
  }
  
  try {
    await dishesService.updateOneDish(req.body.name, req.params.id);
    const dish = await dishesService.getOneDish(req.params.id);

    return res.status(200).json({
      dish
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};


module.exports = {
  getAllDishes,
  createOneDish,
  getOneDish,
  deleteOneDish,
  updateOneDish
};
