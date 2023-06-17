
import encrypt from "encryptjs";
import Users from '../modals/user.js';


export const checkuser=async(req,res,next)=>{
    try{
        const {_id,Password}=req.body;
        if(!_id) return res.send("_id is required in the middleware");
        if(!Password) return res.send("Password is required in the middleware");

        const response=await Users.find({_id}).exec();
        if(!response.length) return res.send("users is not found in middleware");

        var secretkey="pin";
        var decipherkey=encrypt.decrypt(response[0].Password,secretkey,256);
        if(decipherkey==Password){
            next();

        }
        else{
            return res.send("not allowed to get data")
        }

    }
    catch(error){
        return res.send(error);
    }
}