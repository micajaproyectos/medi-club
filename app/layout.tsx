import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediClub — Próximamente",
  description: "La salud está a punto de cambiar para siempre. Bienvenidos a la Nueva Era.",
  icons: {
    icon: "/trasnparente.png",
  },
  openGraph: {
    title: "MediClub — Próximamente",
    description: "La salud está a punto de cambiar para siempre. Bienvenidos a la Nueva Era.",
    images: [{ url: "/mediclub.png" }],
  },
  twitter: {
    card: "summary",
    title: "MediClub — Próximamente",
    description: "La salud está a punto de cambiar para siempre. Bienvenidos a la Nueva Era.",
    images: ["/mediclub.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
