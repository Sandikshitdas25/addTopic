import dbConnect from "@/libs/dbconnect";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await dbConnect();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET(request) {
  await dbConnect()
  const topics = await Topic.find()
  return NextResponse.json({topics})
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id")
  await dbConnect()
  await Topic.findByIdAndDelete(id)
  return NextResponse.json({message: "deleted successfully"},{status: 200})
}