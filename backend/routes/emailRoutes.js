import { Router } from 'express';
import { sendProviderMail , sendColapsMail } from '../service/emailService.js';

const emailRouter = Router();

emailRouter.post('/submission' ,  async (req , res) => {
    const {email , toolTitle} = req.body;

    await sendProviderMail(email);
    await sendColapsMail(email , toolTitle);

    res.json({message: 'All emails sent.'});
});

emailRouter.post('/contact' , async (req , res) => {
    // contact email -> self + colaps
});

export default emailRouter;