import express from 'express';
import { fetchAllEntries , postEntry} from '../controller/blackboardController.js';
import { verifyToken } from '../middleware/auth.js';

const blackboardRouter = express.Router();

blackboardRouter.get("/", fetchAllEntries);
blackboardRouter.post("/" , verifyToken , postEntry);

export default blackboardRouter;