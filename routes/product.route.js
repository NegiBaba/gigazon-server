import express from 'express';
import productController from '../controllers/product.controller';

const router = express.Router();

router.route('/api/products').get(productController.list).post(productController.addProduct)

export default router;
