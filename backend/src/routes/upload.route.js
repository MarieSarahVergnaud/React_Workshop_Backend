import express from "express";
import multer from "multer"; // pour rendre dispo le type FormData.

const router = express.Router();
const upload = multer({dest: "./public/tmp"});

router.post("/", multer.single("image"), function (req, res, next){
    console.log(req.file);
})

export default router;