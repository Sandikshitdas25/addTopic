import mongoose from "mongoose";
import dbConnect from "@/libs/dbconnect";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params
    const {title, description} = await request.json()
    await dbConnect()
    await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "successfully updated"}, {status: 200})
}

export async function GET(request,{params}) {
    const {id} = params
    await dbConnect()
    const topic = await Topic.findOne({_id: id})
    return NextResponse.json({topic},{status: 200})
}