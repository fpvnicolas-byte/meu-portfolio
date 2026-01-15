import type { Metadata } from "next";
import { inter, outfit } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FVA - Future Vision Audiovisual | Onde o Código Encontra a Lente",
  description: "FVA: A convergência entre engenharia de software, inteligência artificial e narrativa visual de alta performance. Produtora audiovisual especializada em tecnologia e inovação.",
  keywords: ["produtora audiovisual", "desenvolvimento fullstack", "inteligência artificial", "filmmaking", "tecnologia", "SaaS audiovisuais"],
  authors: [{ name: "FVA - Future Vision Audiovisual" }],
  creator: "FVA - Future Vision Audiovisual",
  publisher: "FVA - Future Vision Audiovisual",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fva-audiovisual.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FVA - Future Vision Audiovisual | Onde o Código Encontra a Lente",
    description: "A convergência entre engenharia de software, inteligência artificial e narrativa visual de alta performance.",
    url: 'https://fva-audiovisual.vercel.app',
    siteName: 'FVA - Future Vision Audiovisual',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FVA - Future Vision Audiovisual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FVA - Future Vision Audiovisual | Onde o Código Encontra a Lente",
    description: "A convergência entre engenharia de software, inteligência artificial e narrativa visual de alta performance.",
    images: ['/og-image.jpg'],
    creator: '@fva_audiovisual',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
