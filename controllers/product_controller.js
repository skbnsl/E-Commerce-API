const Product = require('../models/product');

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

module.exports.delete = async function(req, res){
          try {
                  const obj = []; 
                  await Product.findByIdAndDelete({_id: req.params.id});
                  res.status(200).json({message:"deleted"}); 
          } catch (error) {
                    res.json(error);
          }
}

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