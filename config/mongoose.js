const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SocioSphere_Development');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error conntect to Database'));

db.once('open', function(){
    console.log('Succesfully connected to Database');
});

module.exports = db;