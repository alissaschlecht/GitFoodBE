const { Ingredient } = require('../models');

const createOneIngredient = (ingredient) => {
  return Ingredient.create(ingredient);
};

const getAllIngredients = () => {
  return Ingredient.findAll();
};

const getOneIngredient = (id) => {
  return Ingredient.findOne({
    where: {
      id
    }
  });
}

const deleteOneIngredient = (id) => {
  return Ingredient.destroy({
    where: {
      id
    }
  });
}

const updateOneIngredient = (ingredient, id) => {
  return Ingredient.update(ingredient, {
    where: {
      id
    }
  });
}

module.exports = {
  getAllIngredients,
  createOneIngredient,
  getOneIngredient,
  deleteOneIngredient, 
  updateOneIngredient
};
