'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('regris', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nim: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    prodi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    angkatan: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    divisisatu: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    divisidua: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alasansatu: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alasandua: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('regris');
  }
};
