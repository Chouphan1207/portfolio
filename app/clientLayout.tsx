'use client';

import { ReactNode } from "react";
import { useLoading } from "./loading-context";
import Header from "@/components/Header";
import LoadingIntro from "@/components/ui/LoadingIntro";
import PageTransition from "@/components/ui/PageTransition";

export default function ClientLayoutContent({ children }: { children: ReactNode }) {
  const { isLoadingDone } = useLoading();

  return (
    <>
      <LoadingIntro />
      {isLoadingDone && <Header />}
      <PageTransition>{children}</PageTransition>
    </>
  );
}
