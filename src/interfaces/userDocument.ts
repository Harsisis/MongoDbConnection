import mongoose from "mongoose";

interface UserDocument extends mongoose.Document { 
    id:  Number,
    first_name: String,
    last_name:   String,
    email: String,
    gender: String,
    ip_address: String 
}