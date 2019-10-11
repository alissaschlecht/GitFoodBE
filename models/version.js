'use strict';
module.exports = (sequelize, DataTypes) => {
  const Version = sequelize.define('Version', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Dish',
        key: 'id'
      },
    },
    notes: DataTypes.STRING,
    versionNumber: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Version.associate = function(models) {
    Version.belongsTo(models.Dish, { foreignKey: 'dishId', targetKey: 'id' } );
    Version.hasMany(models.Ingredient, { foreignKey: 'versionId', sourceKey: 'id' });
    Version.hasMany(models.Instruction, { foreignKey: 'versionId', sourceKey: 'id' });
  };
  return Version;
};