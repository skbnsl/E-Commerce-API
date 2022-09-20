const express = require('express');
const ProductController = require('../controllers/product_controller');

const router = express.Router();

//route for getting data
router.get('/', ProductController.getData);

//route for send the data in database
router.post('/create', ProductController.create);

//route for update data
router.put('/:id/update_quantity', ProductController.update);

//route for delete data in db
router.delete('/:id', ProductController.delete);

//export the router
module.exports = router;