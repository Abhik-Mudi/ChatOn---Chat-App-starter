import User from "../models/userModel.js";

// This function retrieves all users except the logged-in user for displaying in the sidebar
export const getUserForSidebar=async (req, res)=>{
    try {
        const loggedInUserId=req.user._id;

        const allUsers=await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(allUsers)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: "Internal server error"})
    }
}