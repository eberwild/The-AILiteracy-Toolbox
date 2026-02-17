import express from 'express';
import { createUser , loginUser, requestResetEmail , changePassword} from '../controller/userController.js';
import { loginLimiter , registerLimiter} from '../middleware/limiter.js';

const userRouter = express.Router();

userRouter.post('/register' , registerLimiter , createUser);
userRouter.post('/login' , loginLimiter , loginUser);
userRouter.post('/reset-request' , requestResetEmail);
userRouter.post('/password-change' , changePassword);

export default userRouter;