module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    url: DataTypes.STRING,
    size: DataTypes.NUMBER,
    duration: DataTypes.NUMBER,
    favorite: DataTypes.BOOLEAN,
    completed: DataTypes.BOOLEAN,
    user_id: DataTypes.NUMBER,
  });

  return Item;
};
