//import mongoose
const mongoose = require('mongoose');

//connected to database
mongoose.connect('mongodb://localhost/product_db');

const db = mongoose.connection;

//checking that db is connected or not
db.on('error', console.error.bind(console,'error connecting to db'));
