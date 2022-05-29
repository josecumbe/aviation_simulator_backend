const mongoose = require('mongoose');

const ReceiverSchema = new mongoose.Schema({

    latitude: Number,
    longitude: Number,
    coverage: Number,

});

module.exports = mongoose.model('Receiver', ReceiverSchema);