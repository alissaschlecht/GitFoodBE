const { Version } = require('../models');

const createOneVersion = (version) => {
  console.log(version)
  return Version.create(version);
};

const getAllVersions = () => {
  return Version.findAll();
};

const getOneVersion = (id) => {
  return Version.findOne({
    where: {
      id
    }
  });
}

const deleteOneVersion = (id) => {
  return Version.destroy({
    where: {
      id
    }
  });
}

const updateOneVersion = (version, id) => {
  return Version.update(version, {
    where: {
      id
    }
  });
}

module.exports = {
  getAllVersions,
  createOneVersion,
  getOneVersion,
  deleteOneVersion, 
  updateOneVersion
};
