import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.businessName} | League City Pressure Washing`,
  description: site.description,
  robots: site.previewMode ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: `${site.businessName} | Residential + Commercial Exterior Cleaning`,
    description: site.description,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
