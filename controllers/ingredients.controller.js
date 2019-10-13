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
  const ingredientToCreate = req.body.ingredient;

  if (!ingredientToCreate) {
    return res.status(500).json({
      error: 'A ingredient is mandatory.',
    });
  }
  
  try {
    const ingredient = await ingredientsService.createOneIngredient(ingredientToCreate);

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
  const id = req.params.id;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    const ingredient = await ingredientsService.getOneIngredient(id);

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
  const id = req.params.id;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    await ingredientsService.deleteOneIngredient(id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneIngredient = async (req, res) => {
  const id = req.params.id;
  const ingredientToUpdate = req.body.ingredient;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }

  if (!ingredientToUpdate) {
    return res.status(500).json({
      error: 'A ingredient is mandatory.',
    });
  }
  
  try {
    await ingredientsService.updateOneIngredient(ingredientToUpdate, id);
    const ingredient = await ingredientsService.getOneIngredient(id);

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
