import express from 'express';

import filterController from '../controllers/filter.controller';

const router = express.Router();

router.route('/api/filter').get(filterController.filterProducts);

export default router;
