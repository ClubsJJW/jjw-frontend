import type { Profile } from "@/common/providers/AuthProvider";

const STORAGE_KEY = "current_user";
const TOKEN_KEY = "auth_token";

// 현재 로그인 사용자 저장
export const saveCurrentUser = (user: Profile | null) => {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
};

// 현재 로그인 사용자 불러오기
export const loadCurrentUser = (): Profile | null => {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

// 토큰 저장
export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// 토큰 불러오기
export const loadToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

// 토큰 삭제
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
