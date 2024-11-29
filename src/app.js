const express = require('express');
const sequelize = require('./database');
const contractRoutes = require('./routes/contracts');

const app = express();

app.use(express.json());
app.use('/api', contractRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
