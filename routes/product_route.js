const express = require('express');
const ProductController = require('../controllers/product_controller');

const router = express.Router();

router.get('/', ProductController.getData);

router.post('/create', ProductController.create);

router.put('/:id/update_quantity', ProductController.update);

router.delete('/:id', ProductController.delete);

module.exports = router;