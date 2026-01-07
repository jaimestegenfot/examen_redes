import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repaso de Redes y Telecomunicaciones",
  description: "Sistema de repaso para examen de administración de redes de computadores con más de 40 preguntas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50`}
      >
        {children}
      </body>
    </html>
  );
}
