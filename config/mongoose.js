const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'error connecting to db'));
