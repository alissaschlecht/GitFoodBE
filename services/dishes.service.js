const { Dish } = require('../models');

const createOneDish = name => {
  return Dish.create({
    name
  });
};

const getAllDishes = () => {
  return Dish.findAll();
};

const getOneDish = (id) => {
  return Dish.findOne({
    where: {
      id
    }
  })
}

const deleteOneDish = (id) => {
  return Dish.destroy({
    where: {
      id
    }
  })
}

const updateOneDish = (name, id) => {
  return Dish.update({
    name
  },
  {
    where: {
      id
    }
  })
}

module.exports = {
  getAllDishes,
  createOneDish,
  getOneDish,
  deleteOneDish, 
  updateOneDish
};
