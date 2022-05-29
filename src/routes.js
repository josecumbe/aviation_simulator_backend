const express = require("express");
const ReceiverController = require("./controllers/ReceiverController.js")

const routes = express.Router();

// Add receiver
routes.post('/receiver', ReceiverController.save);

// Get all receivers
routes.get('/receiver', ReceiverController.index);

// remove receivers
routes.delete('/receiver', ReceiverController.destroy);

module.exports = routes;