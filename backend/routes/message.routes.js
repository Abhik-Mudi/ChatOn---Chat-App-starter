import express from "express"
import isLoggedIn from "../middlewares/isLoggedIn.js";

const router=express.Router()

import { getMessage, sendMessage } from "../controllers/message.controller.js";

// Route to send a message
router.post("/send/:id", isLoggedIn, sendMessage)

// Route to get messages between the logged-in user and another user
router.get("/:id", isLoggedIn, getMessage)

export default router;