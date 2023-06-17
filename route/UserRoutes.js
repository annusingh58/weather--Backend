import express from "express";
import { register } from "../Controllers/Usercontrollers.js";
import { checkuser } from "../middleware/authmiddleware.js";



const router = express.Router();

router.post('/register', register);
router.post('/checkuser',checkuser)


export default router;