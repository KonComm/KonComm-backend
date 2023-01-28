module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn("customers", "role", {
        type: Sequelize.ENUM,
        values: ["0", "1"],
        defaultValue: "0",
        after: "email",
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn("customers", "role");
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
