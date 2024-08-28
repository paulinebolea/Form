import express from 'express';
import mainController from './controllers/mainController.js';

const router = express.Router();

router.get('/', mainController.home);
router.post('/postrequest', mainController.post)

export default router;