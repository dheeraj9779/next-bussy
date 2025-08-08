import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    return new Response(`Your get request`, { status: 200 });
}