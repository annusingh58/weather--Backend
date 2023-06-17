import mongoose from "mongoose";
import { Schema } from "mongoose";



const user =new Schema({
    Name:String,
    Email:String,
    Password:String

});

export default mongoose .model("Users",user);
