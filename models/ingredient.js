'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
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
    name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    measurement: DataTypes.STRING
  }, {
    underscored: true,
  });
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Version, { foreignKey: 'versionId', targetKey: 'id' });
  };
  return Ingredient;
};