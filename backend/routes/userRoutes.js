import express from 'express';
import { createUser , loginUser, requestResetEmail , changePassword} from '../controller/userController.js';
import { loginLimiter , registerLimiter , resetLimiter , emailLimiter} from '../middleware/limiter.js';

const userRouter = express.Router();

userRouter.post('/register' , registerLimiter , createUser);
userRouter.post('/login' , loginLimiter , loginUser);
userRouter.post('/reset-request' , emailLimiter , requestResetEmail);
userRouter.post('/password-change' , resetLimiter ,  changePassword);

export default userRouter;