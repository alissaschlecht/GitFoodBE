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
  const instructionToCreate = req.body.instruction;

  if (!instructionToCreate) {
    return res.status(500).json({
      error: 'A instruction is mandatory.',
    });
  }
  
  try {
    const instruction = await instructionsService.createOneInstruction(instructionToCreate);

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
  const id = req.params.id;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    const instruction = await instructionsService.getOneInstruction(id);

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
  const id = req.params.id;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    await instructionsService.deleteOneInstruction(id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneInstruction = async (req, res) => {
  const id = req.params.id;
  const instructionToUpdate = req.body.instruction;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }

  if (!instructionToUpdate) {
    return res.status(500).json({
      error: 'A instruction is mandatory.',
    });
  }
  
  try {
    await instructionsService.updateOneInstruction(instructionToUpdate, id);
    const instruction = await instructionsService.getOneInstruction(id);

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
