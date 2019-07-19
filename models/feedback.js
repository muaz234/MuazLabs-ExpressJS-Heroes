'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    name: DataTypes.STRING,
    feedback: DataTypes.STRING
  }, {});
  Feedback.associate = function(models) {
    // associations can be defined here
  };
  return Feedback;
};