import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({"data":"Hello from route handler"})
}