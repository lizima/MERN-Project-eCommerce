const express = require('express');
const router = express.Router();

const { getAllProducts, getProductsById, getProductById,} = require('../controller/productControllers');

// @desc Get all products from db
// @route Get /api/products
// @access Public

router.get('/', getAllProducts);
// router.get('/', (req,res)=> {

// })

// @desc Get a product by id from db
// @route Get /api/products/:id
// @access Public
router.get('/:id', getProductById);
// router.get('/:id', (req,res)=> {

// })

module.exports = router;