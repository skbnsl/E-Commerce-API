//import mongoose
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://skbansal:skbnsl@cluster0.i2grcwf.mongodb.net/?retryWrites=true&w=majority";

//connected to database
mongoose.connect(mongoURI);
                
const db = mongoose.connection;

//checking that db is connected or not
db.on('error', console.error.bind(console,'error connecting to db'));
