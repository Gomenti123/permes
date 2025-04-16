import { dbConfig } from "@/app/utils/dbConfig"
import myAdminModel from "@/app/utils/model/adminModel"
import myUserModel from "@/app/utils/model/userModel"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req:NextRequest, {params}:any)=>{
    try {
        await dbConfig()
        const {username, name} = await req.json()
        const {adminID} = await params;
        const admin = await myAdminModel.findById(adminID)
        if(admin){
            const getD = await myUserModel.create({username, name})
            admin.users.push(getD._id)
            admin.save()
            return NextResponse.json({
                message: "user created",
                status: 200,
                data: getD
            })
        }else{
            return NextResponse.json({
                message: "Error Occured",
                status: 400,
            })
        }
       
    } catch (error:any) {
        return NextResponse.json({
            mesage: "Error Occured",
            status: 400,
            error: error.message,
          });
    }
}
