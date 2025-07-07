import express from "express"
import isLoggedIn from "../middlewares/isLoggedIn.js";

const router=express.Router()

import { getMessage, sendMessage } from "../controllers/message.controller.js";

router.post("/send/:id", isLoggedIn, sendMessage)
router.get("/:id", isLoggedIn, getMessage)

export default router;