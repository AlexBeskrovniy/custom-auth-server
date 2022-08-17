import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.mjs';

const router = express.Router();

router
    .post('/api/user/create', registerUser)
    .post('/api/user/login', loginUser);

export default router;