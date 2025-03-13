import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';  

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Regis Data Solution",
  description: "Automação de processos manuais.",
  openGraph: {
    title: "Regis Data Solution",
    description: "Automação de processos manuais.",
    url: "http://localhost:3000",
    siteName: "Regis Data Solution",
    images: [
      {
        url: "http://localhost:3000/og.png",
        width: 1280,
        height: 720,
        alt: "Regis Data Solution",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
