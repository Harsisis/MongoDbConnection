import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { Schema } from "zod";

const userSchema = new mongoose.Schema();

interface UserDocument extends mongoose.Document { 
    id:  Number,
    first_name: String,
    last_name:   String,
    email: String,
    gender: String,
    ip_address: String 
}

const UserModel = mongoose.model("User", userSchema); 
export default UserModel;