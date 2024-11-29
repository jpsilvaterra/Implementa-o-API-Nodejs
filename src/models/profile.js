const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Profile = sequelize.define('Profile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstname: DataTypes.STRING(45),
  profession: DataTypes.STRING(45),
  balance: DataTypes.DOUBLE,
  type: DataTypes.STRING(45)
});

module.exports = Profile;
