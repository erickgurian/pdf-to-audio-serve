module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('items', {
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
    key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    favorite: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      // references: {
      //   model: 'users',
      //   key: 'id',
      // },
      allowNull: false,
      // onDelete: 'cascade',
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('items'),
};
