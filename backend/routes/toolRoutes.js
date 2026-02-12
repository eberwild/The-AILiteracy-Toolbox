import express from 'express';
import { fetchallTools , provideNewTool } from '../controller/toolController.js';
import { verifyToken } from '../middleware/auth.js';

const toolRouter = express.Router();

toolRouter.get('/' , fetchallTools);
toolRouter.post('/' , verifyToken , provideNewTool);

export default toolRouter;