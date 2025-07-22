import { Brand } from "@/app/brand/__model/brand.model";
import { connectDB } from "@/config/database";
import { NextResponse } from "next/server";
export async function GET() {
  await connectDB();
  
  const brands = await Brand.find();

  return NextResponse.json(brands);
}