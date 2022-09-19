import { Router } from 'express';
import cartController from "../controllers/cart.controller"

const router = new Router();

router.route('/api/cart').get(cartController.list).post(cartController.upsert)

export default router;