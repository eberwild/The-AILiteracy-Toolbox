// dependencies
import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import dotenv from 'dotenv';  
dotenv.config();              // env-File laden -> before all imports that use .env
// routes
import userRouter from './routes/userRoutes.js';
import toolRouter from './routes/toolRoutes.js';
import blackboardRouter from './routes/blackboardRoutes.js';
// database
import { createTables } from './database/createTables.js';

const app = express();                      // express for api routing
const port = process.env.PORT || 3000;      // default port for localhost

// cors -> frontend and backend are listening on different ports 
app.use(cors());

// JSON parsing middleware-> to get acces to req.body as JSON
app.use(express.json());

// rate limit -> 100 request / 15 min
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000 ,
  max: 100 ,
  message: 'Too many request, little pause for you!'
});

app.use(limiter);

// simple middleware logger example
app.use((req , _ , next) => {
    console.log(`Request-Method: ${req.method} , Request-URL: ${req.url} `);
    // next() -> express will continue with the next middleware or apiroute
    next();
})

// api-routes -> user
app.use('/api/users' , userRouter);

// api-routes -> tools
app.use('/api/tools' , toolRouter);

// api-routes -> blackboard
app.use('/api/blackboard' , blackboardRouter)

// init the db tables -> dont start server if table creation throws an error
createTables()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server läuft auf http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Fehler beim Erstellen der Tabellen:', err);
  });