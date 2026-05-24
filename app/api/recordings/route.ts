import { NextResponse } from "next/server";
import { getRecordings } from "@/app/api/_data/ekspertklinikken-store";

export async function GET() {
  return NextResponse.json({ data: getRecordings() });
}
