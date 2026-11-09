import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import RouteLoader, { RouteLoadingScreen } from "./route-loader";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevated By Elle | Des Moines Hair Stylist & Extensions",
  description:
    "Elevated By Elle at Saint Blonde Salon in West Des Moines specializes in lived-in color, hand-tied extensions, and thoughtful hair wellness.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <Suspense fallback={<RouteLoadingScreen />}>
          <RouteLoader>{children}</RouteLoader>
        </Suspense>
      </body>
    </html>
  );
}
