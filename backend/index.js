// Importation du module Express
 import express from "express" ;
// Initialisation de l'application Express
const app = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import router from "./src/routes/rickCharacter.route.js"
// const router = require ("./src/routes/rickCharacter.route.js")

// Définition du numéro de port sur lequel le serveur écoutera
const port = process.env.BACKEND_PORT;

// Réponse "hello world" lorsqu'une requête GET est effectuée sur la page d'accueil
// app.get('/', (req, res) => {
//   res.send('hello world');
// });

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json());

app.use(router);


console.log("bonjour mimi")
// Mise en écoute du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Serveur is actually running on port ${port}`);
});