import express from 'express';
import { createUser , loginUser, resetPasswordLink } from '../controller/userController.js';
import { loginLimiter , registerLimiter} from '../middleware/limiter.js';

const userRouter = express.Router();

userRouter.post('/register' , registerLimiter , createUser);
userRouter.post('/login' , loginLimiter , loginUser);
userRouter.post('/reset-request' , resetPasswordLink);

export default userRouter;