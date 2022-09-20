const Product = require('../models/product');

module.exports.create = async function(req, res){
           try {
              const data = req.body;
              console.log(data);
              const sentData = await Product.create(data);
              console.log(sentData);
              res.json(sentData);
                    } catch (error) {
                    res.json(error);
           }
}

module.exports.delete = async function(req, res){
          try {
                  await Product.findByIdAndDelete({_id: req.params.id});
                  res.status(200).json({message:"deleted"}); 
          } catch (error) {
                    res.json(error);
          }
}

// module.exports.update = function(req, res){
//           try {
//                    Product.findByIdAndUpdate({_id:req.params.id});
//                    console.log(req.params.quantity);
//                    res.status(200).json({message:"update"}); 
//           } catch (error) {
//                     res.json(error);
//           }
// }

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
          const data = await Product.find();
          console.log(data);
          res.json(data);
 } catch (error) {
          res.json(error);
 }         
}