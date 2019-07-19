'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    img_path: DataTypes.BLOB
  }, {});
  Hero.associate = function(models) {
    // associations can be defined here
  };
  return Hero;
};