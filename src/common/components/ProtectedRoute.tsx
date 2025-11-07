"use client";

import { useAuth } from "@/common/providers/AuthProvider";
import { IMPLEMENTED_PAGES } from "@/common/types/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // 공개 페이지 목록
  const publicPages = ["/", "/main", "/login"];

  // 현재 경로가 구현된 페이지인지 확인
  const isImplementedPage = IMPLEMENTED_PAGES.includes(pathname);

  // 공개 페이지이거나 구현되지 않은 페이지인 경우 처리하지 않음
  const shouldCheckAuth = !publicPages.includes(pathname) && isImplementedPage;

  useEffect(() => {
    // 로딩 중이거나 메인 페이지, 로그인 페이지는 제외
    if (
      !isLoading &&
      !isLoggedIn &&
      pathname !== "/main" &&
      pathname !== "/login"
    ) {
      router.replace("/login");
    }
  }, [isLoggedIn, isLoading, pathname, router]);

  // 로딩 중일 때는 아무것도 렌더링하지 않음
  if (isLoading) {
    return null;
  }

  // 로그인하지 않았고 보호가 필요한 페이지인 경우 null 반환
  if (shouldCheckAuth && !isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};
