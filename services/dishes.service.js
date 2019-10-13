const { Dish } = require('../models');

const createOneDish = (dish) => {
  return Dish.create(dish);
};

const getAllDishes = () => {
  return Dish.findAll();
};

const getOneDish = (id) => {
  return Dish.findOne({
    where: {
      id
    }
  });
}

const deleteOneDish = (id) => {
  return Dish.destroy({
    where: {
      id
    }
  });
}

const updateOneDish = (dish, id) => {
  return Dish.update(dish, {
    where: {
      id
    }
  });
}

module.exports = {
  getAllDishes,
  createOneDish,
  getOneDish,
  deleteOneDish, 
  updateOneDish
};
