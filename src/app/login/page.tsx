"use client";

import { useAuth } from "@/common/providers/AuthProvider";
import { LoginForm } from "@/features/auth/components/LoginForm";
import type { LoginFormData } from "@/features/auth/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { login, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  const handleLogin = async (data: LoginFormData) => {
    try {
      await login(data);
      router.replace("/");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "로그인에 실패했습니다.";
      alert(message);
    }
  };

  if (isLoggedIn) {
    return null;
  }

  return <LoginForm onLogin={handleLogin} />;
}
