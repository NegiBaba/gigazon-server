import express from 'express';
import searchController from '../controllers/search.controller';

const router = express.Router();

router.route('/api/search').get(searchController.search);

export default router;
