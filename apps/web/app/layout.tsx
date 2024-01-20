import { NavMobile, Nav, Footer } from "@dub/ui";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter, satoshi } from "@/styles/fonts";
import { cn, constructMetadata } from "@dub/utils";
import "@/styles/globals.css";
export const metadata = {
  title: "Vercl.co - is the go-to link management infrastructure for modern marketing teams.",
  description:
    "Vercl.co - is the go-to link management infrastructure for modern marketing teams.",
  metadataBase: new URL("https://www.vercl.co"),
  themeColor: "#000000",
};
export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(satoshi.variable, inter.variable)}>
    <body>
    <div className="flex min-h-screen flex-col justify-between">
      <NavMobile />
      <Nav />
      {children}
      <Analytics />
       <SpeedInsights />
      <Footer />
    </div>
  </body>
  </html>
  );
}
