var mongoose = require('mongoose');
//var connection = mongoose.connect('mongodb://localhost/mean_db');
var connection = mongoose.connect('mongodb+srv://admin:admin@cluster0-57pol.mongodb.net/test?retryWrites=true&w=majority');

module.exports = connection;