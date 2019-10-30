'use strict'
module.exports = (sequelize, DataTypes) => {
  const instances = sequelize.define('instances', {
    domain: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    blocked: DataTypes.BOOLEAN,
    data: DataTypes.JSON
  }, {})

  instances.associate = function (models) {
    instances.hasMany(models.fed_users)
  }

  return instances
}
