import express from "express";

import { getAllCharacters, getCharacterById, createCharacter } from "../controllers/rickCharacter.controller.js";

const router = express.Router();

router.get("/", getAllCharacters); // VERBE HTTP
router.get("/:id", getCharacterById);
router.post("/", createCharacter);

export default router;
