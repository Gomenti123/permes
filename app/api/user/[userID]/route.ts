import { dbConfig } from "@/app/utils/dbConfig";
import myUserModel from "@/app/utils/model/userModel"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req:NextRequest, {params}:any)=>{
    await dbConfig()
    const {userID} = await params;
    const getD = await myUserModel.findById(userID)
    return NextResponse.json({message: "user found", status: 200, data: getD})
}