import { NextResponse } from 'next/server'

export default function middleware(req, res){
    const guard = req.cookies.get("next_session");
    const url = req.url;

    if(!guard && url.includes('/dashboard')) {
        return NextResponse.redirect("http://localhost:3000/login");
    }

    if (guard && url.includes('/login')) {
      return NextResponse.redirect("http://localhost:3000/dashboard");
    }
}