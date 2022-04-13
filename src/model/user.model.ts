import mongoose from 'mongoose';
import config from 'config';
const { Schema } = mongoose;

const userSchema = new Schema({
    id:  Number,
    first_name: String,
    last_name:   String,
    email: String,
    gender: String,
    ip_address: String
  });
const UserModel = mongoose.model("User", userSchema); 
export default UserModel;