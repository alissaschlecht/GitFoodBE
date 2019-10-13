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
        model: 'Version',
        key: 'id'
      },
    },
    stepNumber: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    underscored: true,
  });
  Instruction.associate = function(models) {
    Instruction.belongsTo(models.Version, { foreignKey: 'versionId', targetKey: 'id' });
  };
  return Instruction;
};