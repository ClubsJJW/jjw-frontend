"use client";

import { useAuth } from "@/common/providers/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 메인 페이지("/")와 로그인 페이지("/login")는 제외
    if (!isLoggedIn && pathname !== "/main" && pathname !== "/login") {
      router.replace("/login");
    }
  }, [isLoggedIn, pathname, router]);

  // 로그인하지 않았고 보호된 페이지인 경우 null 반환
  if (!isLoggedIn && pathname !== "/main" && pathname !== "/login") {
    return null;
  }

  return <>{children}</>;
};
