const express = require('express');
const Umzug = require('umzug');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const db = require('./models');


// configure sequelize to connect to db and run migrations if needed
const umzug = new Umzug({
  storage: "sequelize",

  storageOptions: {
    sequelize: db.sequelize
  },

  migrations: {
    params: [
      db.sequelize.getQueryInterface(),
      db.Sequelize
    ],
    path: path.join(__dirname, "./migrations")
  }
});

umzug.up()
  .then(success => {
    console.log(new Date() + " Migrations applied successfully. ")
  })
  .catch(error => {
    console.log(new Date() + " There was an issue running the migration. " + error)
    process.exit();
  })

// create express app
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);


module.exports = app;
