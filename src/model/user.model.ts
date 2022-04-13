import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from '../interfaces/userInterface';
import { appendFile } from 'fs';
const { Schema } = mongoose;
import Logger from '../helpers/logger';

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

userSchema.pre("save", async function(next: any){
  let user = this as UserDocument;
  if (!user.isModified("password")){
    return next();
  } 
  let salt = await bcrypt.genSalt(config.get<number>("salt"))
  let hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
})

userSchema.methods.comparePasswords = async function(candidatePassword : string):Promise<boolean> {
	let user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((e : any) => {
    Logger.error("ERROR - wrong password ({e})", e);
    return false;
  });
}

const UserModel = mongoose.model("User", userSchema); 
export default UserModel;