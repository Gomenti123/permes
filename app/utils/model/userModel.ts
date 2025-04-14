import { model, models, Schema } from "mongoose";

const userModel = new Schema({username: {type: String, unique: true, require: true}, name: {type: String, require: true}, amount: {type: Number, default: 0}}, {timestamps: true})

const myUserModel = models.users || model("users", userModel)
export default myUserModel