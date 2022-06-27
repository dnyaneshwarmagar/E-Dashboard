const express = require("express");
const router = express.Router();
const User = require("../models/users.model")

router.post("/register",async (req,res)=>{
    try{
        let user = await User.create(req.body);
          user = user.toObject();
        delete user.password;
        return res.status(201).send(user)
    }catch(err){
        res.status(500).send(err.message)
    }
});
router.post("/login", async (req,res)=>{
    try{
        if(req.body.email && req.body.password){

            let user = await User.findOne(req.body).select({password:0,__v:0});
            return res.status(201).send(user)
        }
        else{
            return res.status(501).send("Provide Valid Credentials")
        }
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/",async (req,res)=>{
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send(users)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports= router;