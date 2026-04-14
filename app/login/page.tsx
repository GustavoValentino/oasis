// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoImage from "@/public/images/logo01.png";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Autenticação simples para administração única
    // Em produção, você deve usar variáveis de ambiente ou um banco de dados
    if (password === "1234") {
      // Define um cookie básico que expira em 1 dia
      document.cookie = "auth_token=true; path=/; max-age=900; SameSite=Strict";
      router.push("/admin/leads");
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
        <div className="flex flex-col items-center">
          <Image
            src={LogoImage}
            alt="Logo"
            width={80}
            height={50}
            className="mb-4"
          />
          <h1 className="text-2xl font-bold text-white">Acesso Restrito</h1>
          <p className="text-zinc-400 text-sm">
            Identifique-se para gerir os leads.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Digite a senha mestra"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/5 border-white/10 text-white focus:border-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
          >
            Entrar no Dashboard
          </Button>
        </form>
      </div>
    </div>
  );
}
