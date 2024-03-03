/****
 * const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SocioSphere_Development');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error conntect to Database'));

db.once('open', function(){
    console.log('Succesfully connected to Database');
});

module.exports = db;
*/

const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost/SocioSphere_Development';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

db.once('open', function () {
    console.log('Connected to database :: MongoDB');
});

module.exports = db;
