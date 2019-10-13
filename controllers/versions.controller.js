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
  const versionToCreate = req.body.version;

  if (!versionToCreate) {
    return res.status(500).json({
      error: 'A version is mandatory.',
    });
  }
  
  try {
    const version = await versionsService.createOneVersion(versionToCreate);

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
  const id = req.parans.id;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    const version = await versionsService.getOneVersion(id);

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
  const id = req.parans.id;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    await versionsService.deleteOneVersion(id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneVersion = async (req, res) => {
  const id = req.parans.id;
  const versionToUpdate = req.body.version;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }

  if (!versionToUpdate) {
    return res.status(500).json({
      error: 'A version is mandatory.',
    });
  }
  
  try {
    await versionsService.updateOneVersion(versionToUpdate, id);
    const version = await versionsService.getOneVersion(id);

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
