import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document{
    id:  {type:Number, required:false},
    first_name: {type:String, required:false},
    last_name: {type:String, required:false},
    username : {type:String, required:true},
    password : string,
    email: {type:String, required:true},
    gender: {type:String, required:false},
    ip_address: {type:String, required:false},
    comparePassword(candidatePassword:String) : Promise<boolean>
}