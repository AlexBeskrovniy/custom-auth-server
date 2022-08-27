import express from 'express';
import { createTodo } from '../controllers/todoController.mjs';
import { defender } from '../middleware/auth.mjs';

const router = express.Router();

router
    .post('/api/todo/create', defender, createTodo);

export default router;