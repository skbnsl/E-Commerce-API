//require express module
const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const app = express();
dotenv.config();
const port = process.env.PORT;
const bodyParser = require('body-parser');

//use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/products', require('./routes/product_route'));


//checking the server
app.listen(port, function(err){
          if(err){console.log('error in server'); return;}

          console.log('server is running on port', port);
          return;
});