const { DishVersion } = require('../models');

const createOneVersion = version => {
  return DishVersion.create(version);
};

const getAllVersions = () => {
  return DishVersion.findAll();
};

const getOneVersion = (id) => {
  return DishVersion.findOne({
    where: {
      id
    }
  })
}

const deleteOneVersion = (id) => {
  return DishVersion.destroy({
    where: {
      id
    }
  })
}

const updateOneVersion = (version, id) => {
  return DishVersion.update(version,
  {
    where: {
      id
    }
  })
}

module.exports = {
  getAllVersions,
  createOneVersion,
  getOneVersion,
  deleteOneVersion, 
  updateOneVersion
};
