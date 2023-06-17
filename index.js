import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./route/UserRoutes.js";


const app=express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v7',router);

mongoose.connect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/weather')

.then(()=>console.log("db connected"))
.catch((error)=>console.log("db error=>",error))


app.listen(5001,()=>console.log("working on port 7000"))