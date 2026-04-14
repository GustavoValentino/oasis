import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: "Oásis Águas | Caminhão Pipa e Água Potável",
  description:
    "Líder no transporte de água potável via caminhão pipa. Atendimento especializado 24h para indústrias, condomínios e obras em toda a Capital, ABC e Região Metropolitana de São Paulo.",
  keywords: [
    "caminhão pipa são paulo",
    "água potável SP",
    "abastecimento de água 24h",
    "caminhão pipa grande são paulo",
    "água para piscina SP",
    "aluguel de caminhão pipa",
    "transporte de água potável",
  ],
  authors: [{ name: "Oásis Águas Potáveis" }],
  openGraph: {
    title: "Oásis Águas | Abastecimento de Água Potável em São Paulo",
    description:
      "Frota moderna e monitorada com laudo de potabilidade. Atendimento 24h em toda a Grande São Paulo.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.oasisaguas.com.br",
    siteName: "Oásis Águas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${epilogue.className} ${epilogue.variable} bg-[#0a0a0a] antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Toaster theme="dark" position="top-right" richColors />
        <Footer />
      </body>
    </html>
  );
}
