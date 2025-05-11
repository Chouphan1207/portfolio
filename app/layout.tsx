
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LoadingProvider } from "./loading-context";
import StoreProvider from "@/redux/StoreProvider";
import ClientLayoutContent from "./clientLayout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tedsphan's Portfolio",
  description: "Modern & Minimalist JS Mastery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <StoreProvider>
              <ClientLayoutContent>{children}</ClientLayoutContent>
            </StoreProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
