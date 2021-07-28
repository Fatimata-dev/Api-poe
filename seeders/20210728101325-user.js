'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Characters', [
     {
       id:1,
       name:'Bill Fof',
       xp:20,
       pv:20,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      id:2,
      name:'Timfa Emard',
      xp:25,
      pv:30,
      createdAt: new Date(),
      updatedAt: new Date()
     },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Characters', null, {})
  }
};
