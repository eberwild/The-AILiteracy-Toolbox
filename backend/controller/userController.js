// models/userModel.js
import database from "../db/knex.js";
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

// register a new user
export const createUser = async () => {

  try{
    const {email ,  password} = req.body;

    // check if Email is already in use
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered."
      });
    }

    // hash the User-password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // create new user 
    const [id] = await database("users").insert({ email, password: hashedPassword });

    // create payload and get secret to create a jwt
    const payload = {
      email,
      id
    };
    // get the secretKey out of the .env file
    const secret = process.env.JWT_SECRET;

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
      console.error('Error im registerUser controller' , error.stack);
    }
};

// login user
export const loginUser = async () => {
  
  try {
    const {email , password} = req.body;

    // if user/email exists -> get user as an object
    const user = await database("users").where({ email }).first();

    // if user does not exists -> feedback to user
    if(!user){
      return res.status(404).json({message: 'Wrong credentials.'});
    }

    // check if user has entered the correct password to login
    const passwordMatch = await bcrypt.compare(password , user.passwordHash);
    if(!passwordMatch){
      return res.status(401).json({message:'Wrong credentials.'});
    }

    // Payload to generate a token after login would be succesfull
    const payload = {
      email,
      role: user.role
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
  }

};

