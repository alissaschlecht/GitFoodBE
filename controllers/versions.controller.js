const versionsService = require('../services/versions.service.js');

const getAllVersions = async (req, res) => {
  try {
    const versions = await versionsService.getAllVersions();

    return res.status(200).json({
      versions
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const createOneVersion = async (req, res) => {
  if (!req.body.version) {
    return res.status(500).json({
      error: 'A version object is mandatory to create a version',
    });
  }
  
  try {
    const version = await versionsService.createOneVersion(req.body.version);

    return res.status(200).json({
      version
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const getOneVersion = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to get a version',
    });
  }
  
  try {
    const version = await versionsService.getOneVersion(req.params.id);

    return res.status(200).json({
      version
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const deleteOneVersion = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to delete a version',
    });
  }
  
  try {
    await versionsService.deleteOneVersion(req.params.id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneVersion = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to update a version',
    });
  }

  if (!req.body.version) {
    return res.status(500).json({
      error: 'A version object is mandatory to update a version',
    });
  }
  
  try {
    await versionsService.updateOneVersion(req.body.version, req.params.id);
    const version = await versionsService.getOneVersion(req.params.id);

    return res.status(200).json({
      version
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};


module.exports = {
  getAllVersions,
  createOneVersion,
  getOneVersion,
  deleteOneVersion,
  updateOneVersion
};
