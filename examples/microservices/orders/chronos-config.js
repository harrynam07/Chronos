require('dotenv').config();
const chronos = require('chronos-tracker');

chronos.use({
  microservice: 'orders',
  interval: 2000,
  // dockerized: true,ß
  database: {
    connection: 'REST',
    type: 'MongoDB',
    URI:
      'mongodb+srv://harrynam:harrynam7@cluster0.e2sc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // URI: process.env.CHRONOS_URI,
  },
  notifications: [],
});
