import express from "express";

import { getAllCharacters, getCharacterById, createCharacter } from "../controllers/rickCharacter.controller.js";

const router = express.Router();

router.get("/characters", getAllCharacters); // VERBE HTTP
router.get("/characters/:id", getCharacterById);
router.post("/characters", createCharacter);

export default router;
