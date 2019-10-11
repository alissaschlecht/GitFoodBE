const ingredientsService = require('../services/ingredients.service.js');

const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await ingredientsService.getAllIngredients();

    return res.status(200).json({
      ingredients
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const createOneIngredient = async (req, res) => {
  if (!req.body.ingredient) {
    return res.status(500).json({
      error: 'A ingredient is mandatory to create an ingredient',
    });
  }
  
  try {
    const ingredient = await ingredientsService.createOneIngredient(req.body.ingredient);

    return res.status(200).json({
      ingredient
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const getOneIngredient = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to get an ingredient',
    });
  }
  
  try {
    const ingredient = await ingredientsService.getOneIngredient(req.params.id);

    return res.status(200).json({
      ingredient
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const deleteOneIngredient = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to delete an ingredient',
    });
  }
  
  try {
    await ingredientsService.deleteOneIngredient(req.params.id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneIngredient = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to update a ingredient',
    });
  }

  if (!req.body.ingredient) {
    return res.status(500).json({
      error: 'A ingredient is mandatory to update a ingredient',
    });
  }
  
  try {
    await ingredientsService.updateOneIngredient(req.body.ingredient, req.params.id);
    const ingredient = await ingredientsService.getOneIngredient(req.params.id);

    return res.status(200).json({
      ingredient
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};


module.exports = {
  getAllIngredients,
  createOneIngredient,
  getOneIngredient,
  deleteOneIngredient,
  updateOneIngredient
};
