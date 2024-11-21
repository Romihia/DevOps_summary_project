const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: console.log,
    }
);

// Test the database connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

// Synchronize the models with the database
sequelize
    .sync({ alter: true }) // Use { force: true } only in development
    .then(() => {
        console.log('Database synchronized.');
    })
    .catch((err) => {
        console.error('Error synchronizing database:', err);
    });

module.exports = { sequelize };
