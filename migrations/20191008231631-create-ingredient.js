'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      versionID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
         model: "DishVersions",
         key: "id"
        }
      },
      name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      measurement: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ingredients');
  }
};