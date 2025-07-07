import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const signup= async (req, res)=>{
    try {
        const {fullname, username, password, confirmPassword, gender}= req.body;

        if(password !== confirmPassword){
            return res.status(400).send("Passwords don't match")
        }

        const user=await User.findOne({username})

        if(user) return res.status(400).json({error: "Username already exists"})

        const hashedPassword=await bcrypt.hash(password, 10);
        
        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser=await User.create({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male"? boyProfilePic: girlProfilePic,
        })

        if(newUser){
            generateToken(newUser._id, res)
            res.status(201).send(newUser)
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

export const login=async (req, res)=>{
    try {
        const {username, password}=req.body;
    
        const user=await User.findOne({username})
        if(!user) return res.status(400).json({error: "Invalid Credentials"})

        bcrypt.compare(password, user.password, async function(err, result) {
            if(result){
                await generateToken(user._id, res);
                res.status(201).json({"message":"Login successful"})
            }else{
                res.status(400).json({error: "Invalid Credentials"});
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

export const logout=async (req, res)=>{
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(201).json({"message":"Logged Out successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}