const Contract = sequelize.define('Contract', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    terms: DataTypes.STRING(45),
    clientId: DataTypes.INTEGER,
    contractorId: DataTypes.INTEGER,
    operationDate: DataTypes.DATE,
    status: DataTypes.STRING(11),
  });
  