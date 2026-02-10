import express from 'express';
import { fetchallTools , provideNewTool } from '../controller/toolController';

const toolRouter = express.Router();

toolRouter.get('/' , fetchallTools);
toolRouter.post('/' , provideNewTool);

export default toolRouter;