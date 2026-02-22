import express from 'express';
import { fetchAllEntries , postEntry , removeEntry} from '../controller/blackboardController.js';
import { verifyToken } from '../middleware/auth.js';

const blackboardRouter = express.Router();

blackboardRouter.get("/", fetchAllEntries);
blackboardRouter.post("/" , verifyToken , postEntry);
blackboardRouter.delete("/:id", verifyToken, removeEntry);

export default blackboardRouter;