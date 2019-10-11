'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    versionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DishVersions',
        key: 'id'
      },
    },
    stepNumber: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Instruction.associate = function(models) {
    // Instruction.belongsTo(models.DishVersion);
  };
  return Instruction;
};