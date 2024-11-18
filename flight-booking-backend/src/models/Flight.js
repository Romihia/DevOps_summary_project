const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Flight = sequelize.define('Flight', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    origin: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    departureTime: { type: DataTypes.DATE, allowNull: false },
    arrivalTime: { type: DataTypes.DATE, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Flight;
