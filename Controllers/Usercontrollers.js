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


export const getTemperature= async(req,res)=>{
    try{
        const{city} =req.body;
        if(!city) return res.send("CIty is required");
        const keyForWheather ="4fc1e0633cd29e2e368a057e71cf382c";
        const response =await axios.post(`http://api.weatherstack.com/forecast?access_key=${keyForWheather}&query=${city}`);

        console.log(response.data,"response")
        res.send(response.data.current.temperature.toString());
    }
    catch(error){
        return res.send(error);
    }
}


export const windspeed= async(req,res)=>{
    try{
        const{city} =req.body;
        if(!city) return res.send("CIty is required");
        const keyForWheather ="4fc1e0633cd29e2e368a057e71cf382c";
        const response =await axios.post(`http://api.weatherstack.com/forecast?access_key=${keyForWheather}&query=${city}`);

        console.log(response.data,"response")
        res.send(response.data.current.wind_speed.toString())
    }
    catch(error){
        return res.send(error);
    }
}


    export const astro= async(req,res)=>{
        try{
            const{city} =req.body;
            if(!city) return res.send("CIty is required");
            const keyForWheather ="4fc1e0633cd29e2e368a057e71cf382c";
            const response =await axios.post(`http://api.weatherstack.com/forecast?access_key=${keyForWheather}&query=${city}`);

            const data=response.data.forecast['2023-06-16'].astro;
            console.log(response,"response")
            res.send(data)
        }
        catch(error){
            return res.send(error);
        }   
    } 

