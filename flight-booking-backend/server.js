const app = require('./src/app');
const dotenv = require('dotenv');
const { sequelize } = require('./src/config/database');

dotenv.config();

const PORT = process.env.PORT || 3000;


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
