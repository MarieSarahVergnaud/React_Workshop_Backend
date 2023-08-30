// Importation du module Express
const express = require('express');
// import express from "express" ;
// Initialisation de l'application Express
const app = express();

// Définition du numéro de port sur lequel le serveur écoutera
const port = 5000;

// Réponse "hello world" lorsqu'une requête GET est effectuée sur la page d'accueil
app.get('/', (req, res) => {
  res.send('hello world');
});

console.log("bonjour mimi")
// Mise en écoute du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Serveur is actually running on port ${port}`);
});