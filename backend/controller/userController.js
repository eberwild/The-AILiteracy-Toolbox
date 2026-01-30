import { findUserByEmail , insertUser } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// register a new user
export const createUser = async (req , res) => {

  try{

    const {email ,  password} = req.body;

    // empty email or password -> feedback to user
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter an email AND a password." });
    }   
      
    const stringEmail = email ? String(email).trim() : null;

    // check if Email is already in use
    const existingUser = await findUserByEmail(stringEmail);
    if(existingUser) {
      return res.status(400).json({message: 'Username is already in use.'});
    }

    // hash the User-password
    const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)

    if(!hashedPassword){
      return res.status(400).json({message: "undefined hashedpassword"})
    }

    // create new user 
    const [id] = await insertUser( email, hashedPassword );

    // create payload and get secret to create a jwt
    const payload = {
      email,
      id
    };

    // get the secretKey out of the .env file -> no secret = error
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined in .env file");
    }

    // create token -> expires in 1 hour -> after that new login for protected api-routes
    const token = jwt.sign(payload , secret , { expiresIn: "1h"});

    // succesfull registration with token in return
    return res.status(201).json(
      {
        message: 'Registered succesfully.' ,
        token
      }
    )

  } catch (error) {
      console.error('Error in registerUser controller' , error.stack);
      return res.status(500).json({ message: 'Internal server error' });
    } 
};

// login user
export const loginUser = async (req , res) => {
  
  try {
    const {email , password} = req.body;

    // if user/email exists -> get user as an object
    const user = await findUserByEmail(email);

    // if user does not exists -> feedback to user
    if(!user){
      return res.status(401).json({message: 'Wrong credentials.'});
    }

    // check if user has entered the correct password to login
    const passwordMatch = await bcrypt.compare(password , user.password);
    if(!passwordMatch){
      return res.status(401).json({message:'Wrong credentials.'});
    }

    // Payload to generate a token after login would be succesfull
    const payload = {
      email: user.email,
      role: user.role,
      id: user.id
    };
    const secret = process.env.JWT_SECRET;

    // after login data is checked -> return a jwt 
    const token = jwt.sign(payload , secret , { expiresIn: "1h"});

    // after succesfull login -> user gets the signed token from the server
    res.status(200).json(
      {
        message:'Login succesfull.',
        token
      }
    );

  } catch(error){
      console.error('Error im loginUser controller' , error.stack);
      return res.status(500).json({ message: 'Internal server error' });
  }

};

