"use client";

import { usePathname } from "next/navigation";
import { MainLayout } from "./MainLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { ReactNode } from "react";

interface ConditionalLayoutProps {
  children: ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  // 로그인 페이지는 레이아웃 없이 렌더링
  if (pathname === "/login") {
    return <>{children}</>;
  }

  // 나머지 페이지는 ProtectedRoute + MainLayout 적용
  return (
    <ProtectedRoute>
      <MainLayout>{children}</MainLayout>
    </ProtectedRoute>
  );
}
