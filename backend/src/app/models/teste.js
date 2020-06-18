'use strict';
module.exports = (sequelize, DataTypes) => {
  const teste = sequelize.define('teste', {
    teste: DataTypes.STRING
  }, {});
  teste.associate = function(models) {
    // associations can be defined here
  };
  return teste;
};