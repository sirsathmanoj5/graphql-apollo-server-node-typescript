import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const User =  new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, reuire: true},
    password: { type: String, min:8 , max: 16, require: true},
    createdAt: { type: Date, default: Date.now }
})

export default User;