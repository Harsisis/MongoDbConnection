import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    id:  {type:Number, required:false},
    first_name: {type:String, required:false},
    last_name: {type:String, required:false},
    username : {type:String, required:true},
    password : {type:String, required:true},
    email: {type:String, required:true},
    gender: {type:String, required:false},
    ip_address: {type:String, required:false}
  });

const UserModel = mongoose.model("User", userSchema); 
export default UserModel;