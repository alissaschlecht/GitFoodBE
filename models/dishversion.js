'use strict';
module.exports = (sequelize, DataTypes) => {
  const DishVersion = sequelize.define('DishVersion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Dishes',
        key: 'id'
      },
    },
    notes: DataTypes.STRING,
    versionNumber: DataTypes.INTEGER
  }, {});
  DishVersion.associate = function(models) {
    DishVersion.belongsTo(models.Dish);
    DishVersion.hasMany(models.Ingredient);
    DishVersion.hasMany(models.Instruction);
  };
  return DishVersion;
};