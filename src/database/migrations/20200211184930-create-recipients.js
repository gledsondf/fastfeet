'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('recipients', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique:true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false
        },
        numero: {
          type: Sequelize.STRING,
          allowNull: false
        },
        complemento: {
          type: Sequelize.STRING,
          allowNull: false
        },
        estado: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false
        },
        CEP: {
          type: Sequelize.STRING,
          allowNull: false
        },
        provider: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }

        });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('recipients');

  }
};
