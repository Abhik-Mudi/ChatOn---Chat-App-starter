import express from "express"
import * as dotenv from "dotenv"
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRouter from "./routes/auth.routes.js"
import messagesRouter from "./routes/message.routes.js"
import usersRouter from "./routes/user.routes.js"

const app=express()
const PORT=process.env.PORT || 3000;

dotenv.config() 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.get("/", (req, res)=>{
    res.send("hey")
})

app.use("/api/auth", authRouter) 
app.use("/api/messages", messagesRouter) 
app.use("/api/users", usersRouter) 

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server running on port ${PORT}`);
})