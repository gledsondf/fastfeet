module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
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

      return queryInterface.dropTable('users');

  }
};
