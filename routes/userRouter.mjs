import express from 'express';
import { registerUser, loginUser, testAuth } from '../controllers/userController.mjs';
import { defender } from '../middleware/auth.mjs';

const router = express.Router();

router
    .post('/api/user/create', registerUser)
    .post('/api/user/login', loginUser)
    .get('/api/user/test', defender, testAuth);

export default router;