import { dbConfig } from "@/app/utils/dbConfig"
import myUserModel from "@/app/utils/model/userModel"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req:NextRequest)=>{
    try {
        await dbConfig()
        const {username, name} = await req.json()
        const getD = await myUserModel.create({username, name})
        return NextResponse.json({
            message: "user created",
            status: 200,
            data: getD
        })
    } catch (error:any) {
        return NextResponse.json({
            mesage: "Error Occured",
            status: 400,
            error: error.message,
          });
    }
}
