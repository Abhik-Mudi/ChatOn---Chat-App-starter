import express from "express"
import isLoggedIn from "../middlewares/isLoggedIn.js"

const router=express.Router()

import { getUserForSidebar } from "../controllers/user.controller.js";

router.get("/", isLoggedIn, getUserForSidebar)

export default router;