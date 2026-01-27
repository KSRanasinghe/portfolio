"use client";

import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

export default function ScrollAnimationWrapper({ children }: { children: ReactNode }) {
  useScrollAnimations();

  return <>{children}</>;
}