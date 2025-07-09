import mongoose from "mongoose";

// This schema defines the structure of a user in the database
const userSchema=new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        uinque: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    },
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;