module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "employee",
    {
      TableNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      foodOrder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  Employee.associate = (models) => {
    Employee.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Employee;
};
