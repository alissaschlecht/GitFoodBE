'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  Dish.associate = function(models) {
    Dish.hasMany(models.Version, { foreignKey: 'dishId', sourceKey: 'id' });
  };
  return Dish;
};