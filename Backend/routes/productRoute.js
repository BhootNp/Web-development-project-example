const express = require('express').Router();

const { getAllProducts } = require('../controllers/productController');

express.get('/product', getAllProducts);

module.exports = express;