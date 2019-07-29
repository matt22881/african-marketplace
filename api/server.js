const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const configureRoutes = require('../config/routes.js')

const server = express()

server.use(helmet())

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

  module.exports = server