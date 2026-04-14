// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Verifica se a rota começa com /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const session = request.cookies.get("auth_token");

    // 2. Se não houver token, redireciona para a página de login
    if (!session) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Configura em quais caminhos o middleware deve rodar
export const config = {
  matcher: ["/admin/:path*"],
};
