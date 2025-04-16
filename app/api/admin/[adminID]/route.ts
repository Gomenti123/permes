import { dbConfig } from "@/app/utils/dbConfig"
import myAdminModel from "@/app/utils/model/adminModel"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

export const GET = async (req:NextRequest, {params}:any)=>{
    await dbConfig()
    const {adminID} = await params
    const getD = await myAdminModel.findById(adminID)
    return NextResponse.json({message: "Admin Found", status: 200, data: getD})
}