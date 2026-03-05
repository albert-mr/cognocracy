import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://cognocracy.org"),
  title: {
    default: "albert martínez — cognocracy",
    template: "%s | cognocracy",
  },
  description:
    "albert martínez. cognocracy — ruling by cognition. building argue.fun, botcha.xyz. youngest artist at venice biennale 2025.",
  keywords: [
    "albert martínez",
    "cognocracy",
    "ruling by cognition",
    "argue.fun",
    "botcha.xyz",
    "venice biennale 2025",
  ],
  authors: [{ name: "albert martínez", url: "https://cognocracy.org" }],
  creator: "albert martínez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognocracy.org",
    siteName: "cognocracy",
    title: "albert martínez — cognocracy",
    description:
      "ruling by cognition. building argue.fun, botcha.xyz. youngest artist at venice biennale 2025.",
  },
  twitter: {
    card: "summary",
    site: "@cognocracy",
    creator: "@cognocracy",
    title: "albert martínez — cognocracy",
    description:
      "ruling by cognition. building argue.fun, botcha.xyz. youngest artist at venice biennale 2025.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cognocracy.org",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "albert martínez",
                url: "https://cognocracy.org",
                sameAs: [
                  "https://x.com/cognocracy",
                  "https://t.me/cognocracy",
                  "https://github.com/albert-mr",
                ],
                jobTitle: "Founder",
                knowsAbout: [
                  "cognocracy",
                  "ruling by cognition",
                  "argue.fun",
                  "botcha.xyz",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "cognocracy",
                url: "https://cognocracy.org",
                description:
                  "cognocracy — ruling by cognition. personal site of albert martínez.",
              },
            ]),
          }}
        />
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
