//import mongoose
const mongoose = require('mongoose');

//connected to database
mongoose.connect('mongodb+srv://skbnsl2:bansal12@ecomapi.gnwo7av.mongodb.net/?retryWrites=true&w=majority');
                
const db = mongoose.connection;

//checking that db is connected or not
db.on('error', console.error.bind(console,'error connecting to db'));
