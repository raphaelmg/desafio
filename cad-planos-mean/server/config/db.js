var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/mean_db');

module.exports = connection;