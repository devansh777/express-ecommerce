const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/products => GET
router.get('/products',adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/add-product => GET
router.get('/add-product', adminController.getAddPorduct);

router.get('/edit-product/:productId', adminController.getEditPorduct);
router.post('/edit-product', adminController.postEditProduct);
router.post('/delete-product',adminController.postDelete);

module.exports = router;
