import express from "express";
import { astro, getTemperature, register, windspeed } from "../Controllers/Usercontrollers.js";
import { checkuser } from "../middleware/authmiddleware.js";



const router = express.Router();

router.post('/register', register);
router.post('/checkuser',checkuser);
router.post('/getTemperature', checkuser, getTemperature);
router.post('/windspeed', checkuser, windspeed);
router.post('/astro', checkuser, astro)


export default router;