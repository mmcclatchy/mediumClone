"use strict";

const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING(50),
      },
      lastName: {
        type: DataTypes.STRING(50),
      },
      bio: {
        type: DataTypes.TEXT,
      },
      avatarUrl: DataTypes.STRING,
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
      },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Story, { foreignKey: "userId" });
    User.hasMany(models.Response, { foreignKey: "userId" });

    User.hasMany(models.StoryClap, { foreignKey: "userId" });
    User.hasMany(models.ResponseClap, { foreignKey: "userId" });

    User.belongsToMany(models.User, {
      as: "followers",
      through: "Follow",
      otherKey: "followerId",
      foreignKey: "followedId",
    });

    User.belongsToMany(models.User, {
      as: "follows",
      through: "Follow",
      otherKey: "followedId",
      foreignKey: "followerId",
    });
  };
  return User;
};
