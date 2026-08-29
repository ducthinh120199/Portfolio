import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { content } from "@/data/content";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import AmbientBackground from "@/components/AmbientBackground";
import { LanguageProvider } from "@/lib/language";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const titleText = `${site.name} — ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleText,
    template: `%s — ${site.name}`,
  },
  description: content.en.hero.intro,
  keywords: [
    "Nguyễn Đức Thịnh",
    "Full-stack Developer",
    "Next.js Developer",
    "React Developer",
    "Dynamics 365 CRM",
    "Oracle APEX",
    "Vietnam software engineer",
    "Ho Chi Minh City developer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: titleText,
    description: content.en.hero.intro,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: titleText,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleText,
    description: content.en.hero.intro,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#14161c",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
  },
  sameAs: [site.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <AmbientBackground />
        <LanguageProvider>
          <div className="relative z-10 flex min-h-full flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
          </div>
          <ScrollReveal />
        </LanguageProvider>
      </body>
    </html>
  );
}
