const { Router } = require("express");
const UserModel = require("../models/UserModel");


const router = Router();


router.post("/register", async (req,res)=>{
    //check if user mail id already exists
    //if no then add new user then redirect to login
    const docs = await UserModel.find({username: req.body.username})
    console.log(docs);
        if(docs.length == 0){
            //user doesnt exist
            //create new user
            UserModel.create({
                username: req.body.username,
                password: req.body.password
            });
            res.status(201).send({
                "msg": "Registered Successfully",
                "user": true
            });

        }else{
            //user already exist
            res.status(409).send({
                "msg": "User Already exists,please login",
                "user": false
            });
        }
    
});

router.post("/login", async (req,res)=>{
    //check whether user exists
    const docs = await UserModel.find({username: req.body.username})

        if(docs.length == 0){
            //user doesnt exist
            //create new user
            res.status(212).send({
                "msg": "User Doesn't exist",
                "username": true
        });

        }else{
            //user already exist
            //res.redirect(`/api/${req.body.username}`);
            res.status(200).send({
                "msg": "User Exists",
                "username": false
            })
        }
});


module.exports = router;
