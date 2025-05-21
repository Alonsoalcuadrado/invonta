import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Invonta",
    default: "Dashboard | Invonta",
  },
  description: "Sistema de gestión de facturas y clientes",
  icons: {
    icon: "/images/logos/InvontaLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
