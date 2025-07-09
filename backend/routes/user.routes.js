import express from "express"
import isLoggedIn from "../middlewares/isLoggedIn.js"

const router=express.Router()

import { getUserForSidebar } from "../controllers/user.controller.js";

// Route to get all users except the logged-in user for displaying in the sidebar
router.get("/", isLoggedIn, getUserForSidebar)

export default router;