'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      version_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
         model: "versions",
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredients');
  }
};