const instructionsService = require('../services/instructions.service.js');

const getAllInstructions = async (req, res) => {
  try {
    const instructions = await instructionsService.getAllInstructions();

    return res.status(200).json({
      instructions
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const createOneInstruction = async (req, res) => {
  if (!req.body.instruction) {
    return res.status(500).json({
      error: 'A instruction is mandatory to create an instruction',
    });
  }
  
  try {
    const instruction = await instructionsService.createOneInstruction(req.body.instruction);

    return res.status(200).json({
      instruction
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const getOneInstruction = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to get an instruction',
    });
  }
  
  try {
    const instruction = await instructionsService.getOneInstruction(req.params.id);

    return res.status(200).json({
      instruction
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const deleteOneInstruction = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to delete an instruction',
    });
  }
  
  try {
    await instructionsService.deleteOneInstruction(req.params.id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneInstruction = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({
      error: 'An id is mandatory to update an instruction',
    });
  }

  if (!req.body.instruction) {
    return res.status(500).json({
      error: 'A instruction is mandatory to update an instruction',
    });
  }
  
  try {
    await instructionsService.updateOneInstruction(req.body.instruction, req.params.id);
    const instruction = await instructionsService.getOneInstruction(req.params.id);

    return res.status(200).json({
      instruction
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};


module.exports = {
  getAllInstructions,
  createOneInstruction,
  getOneInstruction,
  deleteOneInstruction,
  updateOneInstruction
};
