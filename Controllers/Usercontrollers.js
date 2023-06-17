import Users from '../modals/user.js';
import encrypt from "encryptjs";
import axios from "axios";

export const register =async(req,res)=>{
    try{
        const { Name, Email, Password } =req.body;
        if(!Name) return res.send("Name is required");
        if(!Email) return res.send("Email is required");
        if(!Password) return res.send("Password is required");

        const response =await Users.find({Email}).exec();
        if(response.length) return res.send("email already exits");

        var secretkey ="pin";
        var encryptkey=encrypt.encrypt(Password,secretkey,256);

        const info = new Users({
            Name,
            Email,
            Password:encryptkey

        });
        await info.save();
        return res.send("registeration successfully");


    }
    catch(error){
        return res.send(error);
    }
    
}


