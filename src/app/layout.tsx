import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import Script from "next/script";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://typedesigns.com.au"),
  title: `Design, Print, Signage in Tasmania | Typedesigns`,
  description: `Design, print + signage for Tasmanian businesses. Brand development, logo design, business + commercial signage, vehicle graphics + wraps, web development and so much more. Based in the Derwent Valley, in New Norfolk, working all throughout Hobart and statewide.`,
  openGraph: {
    type: "website",
    url: "https://typedesigns.com.au/",
    title: "Design, Print, Signage in Tasmania | Typedesigns",
    description: "Design, print + signage for Tasmanian businesses. Brand development, logo design, business + commercial signage, vehicle graphics + wraps, web development and so much more. Based in the Derwent Valley, in New Norfolk, working all throughout Hobart and statewide.",
    images: [{ url: HOME_OG_IMAGE_URL, alt: "Typedesigns work samples" }],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning to avoid issues with theming https://stackoverflow.com/a/79150843/8306962
    <html lang="en" suppressHydrationWarning>
      <head>
         {/* Google Analytics */}
                <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0X12GXXKJL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0X12GXXKJL');
          `}
        </Script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        <link rel="stylesheet" href="https://use.typekit.net/abcd123.css" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-black text-white no-underline")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
