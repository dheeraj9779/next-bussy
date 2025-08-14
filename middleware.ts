import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    const { pathname } =  request.nextUrl
    if(pathname.includes('/signup')) console.log(true)
    return NextResponse.next()
}


// export const config = {
//     matcher : ['/login']
// }