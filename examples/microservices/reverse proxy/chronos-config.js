require('dotenv').config();
const chronos = require('chronos-tracker');
require('dotenv').config();

chronos.use({
  microservice: 'reverse-proxy',
  interval: 2000,
  // dockerized: true,
  database: {
    connection: 'REST',
    type: 'MongoDB',
    // URI: process.env.CHRONOS_URI,
    URI:
      'mongodb+srv://harrynam:harrynam7@cluster0.e2sc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  },
});
