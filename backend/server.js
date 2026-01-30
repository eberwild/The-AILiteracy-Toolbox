// dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  
// routes
import userRouter from './routes/userRoutes.js';
// database
import { createTables } from './database/createTables.js';

dotenv.config();                            // env-File laden
const app = express();                      // express für api routen definieren
const port = process.env.PORT || 3000;      // default port for localhost

// cors -> frontend and backend are listening on different ports 
app.use(cors());

// JSON parsing middleware-> to get acces to req.body as JSON
app.use(express.json());

// simple middleware logger example
app.use((req , _ , next) => {
    console.log(`Request-Method: ${req.method} , Request-URL: ${req.url}`);
    // next() -> express will continue with the next middleware or apiroute
    next();
})

// api-routes
app.use('/api/users' , userRouter);

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