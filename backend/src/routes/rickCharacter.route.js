const express = require('express');

const { getAllCharacters } = require ('../controllers/rickCharacter.controller.js');

const router = express.Router();

router.get("/characters", getAllCharacters);

module.exports = router;