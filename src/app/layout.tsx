import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entreprise Travaux Fibre Optique  | Détection regard, fourreau bouché, localisation blocage fibre",
  description: "Vous n'arrivez pas à vous faire raccorder à la fibre optique, il y a un blocage et le technicien ne parvient pas à effectuer le branchement ? Nous intervenons pour débloquer votre installation.",
  keywords: "fibre optique travaux,entreprise travaux fibre, déblocage fibre, installation fibre, fourreau bouché, regard fibre, travaux fibre",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fibreoptiquetravaux.fr',
    siteName: 'Fibre Optique Travaux',
    title: 'Entreprise Travaux Fibre Optique  | Déblocage et Installation',
    description: 'Vous n\'arrivez pas à vous faire raccorder à la fibre optique, il y a un blocage et le technicien ne parvient pas à effectuer le branchement ? Nous intervenons pour débloquer votre installation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fibre Optique Travaux - Services professionnels de fibre optique',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fibre Optique Travaux |Détection regard, fourreau bouché, localisation blocage fibre',
    description: 'Vous n\'arrivez pas à vous faire raccorder à la fibre optique, il y a un blocage et le technicien ne parvient pas à effectuer le branchement ?',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://fibreoptiquetravaux.fr',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'mask-icon', url: '/favicon/favicon.ico' },
      { rel: 'manifest', url: '/favicon/site.webmanifest' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:url" content="https://fibreoptiquetravaux.fr" />
        <meta property="og:site_name" content="Fibre Optique Travaux" />
        <meta property="og:title" content="Fibre Optique Travaux | Déblocage et Installation" />
        <meta property="og:description" content="Vous n'arrivez pas à vous faire raccorder à la fibre optique, il y a un blocage et le technicien ne parvient pas à effectuer le branchement ? Nous intervenons pour débloquer votre installation." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fibre Optique Travaux - Services professionnels de fibre optique" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fibre Optique Travaux | Déblocage et Installation" />
        <meta name="twitter:description" content="Vous n'arrivez pas à vous faire raccorder à la fibre optique, il y a un blocage et le technicien ne parvient pas à effectuer le branchement ?" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://fibreoptiquetravaux.fr" />
        <meta name="google-site-verification" content="t5cB7Vw0ZQU4Q7Mt9dluJs5oiky10IRkfo5ZTbJ_48I" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://fibreoptiquetravaux.fr/#website",
              "url": "https://fibreoptiquetravaux.fr",
              "name": "Fibre Optique Travaux",
              "description": "Vous n'arrivez pas à vous faire raccorder à la fibre optique, il y a un blocage et le technicien ne parvient pas à effectuer le branchement ? Nous intervenons pour débloquer votre installation."
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-montserrat antialiased`}
      >
        {children}
        
      </body>
    </html>
  );
}
