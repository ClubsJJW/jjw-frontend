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

  const handleLogin = (data: LoginFormData) => {
    login(data);
    router.replace("/");
  };

  if (isLoggedIn) {
    return null;
  }

  return <LoginForm onLogin={handleLogin} />;
}
