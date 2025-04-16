import { timeStamp } from "console";
import { model, models, Schema, Types } from "mongoose";

const adminModel = new Schema({name: {type: String}, role: {type: String}, users: {type: [{type:  Types.ObjectId, ref: "users"}]}}, {timestamps: true})

const myAdminModel = model("admins", adminModel) || models.admins
export default myAdminModel