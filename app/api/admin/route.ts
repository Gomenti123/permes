import { dbConfig } from "@/app/utils/dbConfig";
import myAdminModel from "@/app/utils/model/adminModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest)=>{
    await dbConfig()
    const {name} = await req.json()
const getD = await myAdminModel.create({name})
return NextResponse.json({message: "Admin created", status: 200, data: getD})
}

