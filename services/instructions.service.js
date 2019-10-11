const { Instructions } = require('../models');

const createOneInstruction = instruction => {
  return Instruction.create(instruction);
};

const getAllInstructions = () => {
  return Instruction.findAll();
};

const getOneInstruction = (id) => {
  return Instruction.findOne({
    where: {
      id
    }
  })
}

const deleteOneInstruction = (id) => {
  return Instruction.destroy({
    where: {
      id
    }
  })
}

const updateOneInstruction = (instruction, id) => {
  return Instruction.update(instruction,
  {
    where: {
      id
    }
  })
}

module.exports = {
  getAllInstructions,
  createOneInstruction,
  getOneInstruction,
  deleteOneInstruction, 
  updateOneInstruction
};
