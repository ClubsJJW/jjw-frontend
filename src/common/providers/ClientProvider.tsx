"use client";

import { AppProvider } from "@channel.io/bezier-react";
import "@channel.io/bezier-react/styles.css";

export function BezierProvider({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
