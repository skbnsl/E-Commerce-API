//import schema
const Product = require('../models/product');


//add the data in the database
module.exports.create = async function(req, res){
           try {
              const obj = {};
              const data = req.body;
              console.log(data);
              const sentData = await Product.create(data);
              obj.product = sentData;
              console.log(sentData);
              res.json(obj);
                    } catch (error) {
                    res.json(error);
           }
}


//delete the data from database
module.exports.delete = async function(req, res){
          try { 
                  await Product.findByIdAndDelete({_id: req.params.id});
                  res.status(200).json({message:"deleted"}); 
          } catch (error) {
                    res.json(error);
          }
}


//update the data in database
module.exports.update = async function(req, res){
          try {
                    const a = req.query.number;
                   const data = await Product.findOneAndUpdate({_id: req.params.id},{
                    $inc:{
                              "quantity":`${a}`
                    }
                   })
                    res.status(200).json({message:"updated"}); 
          } catch (error) {
                    res.json(error);
          }
}


//fetching the data
module.exports.getData = async function(req, res){
 try {
          const obj = {};
          const data = await Product.find();
          obj.product = data;
          console.log(data);
          res.json(obj);
 } catch (error) {
          res.json(error);
 }         
}