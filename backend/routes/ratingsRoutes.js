import { Router } from "express";
import { submitRating } from "../controller/ratingController.js";

const ratingRouter = Router();

ratingRouter.post('/' , submitRating);

export default ratingRouter;