"use client";

import { useAuth } from "@/common/providers/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 로딩 중이거나 메인 페이지, 로그인 페이지는 제외
    if (!isLoading && !isLoggedIn && pathname !== "/main" && pathname !== "/login") {
      router.replace("/login");
    }
  }, [isLoggedIn, isLoading, pathname, router]);

  // 로딩 중일 때는 아무것도 렌더링하지 않음
  if (isLoading) {
    return null;
  }

  // 로그인하지 않았고 보호된 페이지인 경우 null 반환
  if (!isLoggedIn && pathname !== "/main" && pathname !== "/login") {
    return null;
  }

  return <>{children}</>;
};
