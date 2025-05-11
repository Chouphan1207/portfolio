'use client'

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LoadingProvider, useLoading } from "./loading-context"; // useLoading imported
import Header from "@/components/Header";
import LoadingIntro from "@/components/ui/LoadingIntro";
import PageTransition from "@/components/ui/PageTransition";
import StoreProvider from "@/redux/StoreProvider";
import { ReactNode } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Tedsphan's Portfolio",
//   description: "Modern & Minimalist JS Mastery",
// };

function LayoutContent({ children }: { children: ReactNode }) {
  const { isLoadingDone } = useLoading();

  return (
    <>
      <LoadingIntro />
      {isLoadingDone && <Header />}
      <PageTransition>{children}</PageTransition>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              <LayoutContent>{children}</LayoutContent>
            </StoreProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
