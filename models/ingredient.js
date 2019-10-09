'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    versionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DishVersions',
        key: 'id'
      },
    },
    name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    measurement: DataTypes.STRING
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.DishVersion);
  };
  return Ingredient;
};