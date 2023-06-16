"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class login extends Model {
    static associate(models) {
      // define association here
    }
  }
  login.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "login",
    }
  );
  return login;
};
