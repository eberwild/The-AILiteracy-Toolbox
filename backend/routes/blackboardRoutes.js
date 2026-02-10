import express from 'express';
import { fetchAllEntries , postEntry} from '../controller/blackboardController.js';

const blackboardRouter = express.Router();

blackboardRouter.get("/", fetchAllEntries);
blackboardRouter.post("/" , postEntry);

export default blackboardRouter;