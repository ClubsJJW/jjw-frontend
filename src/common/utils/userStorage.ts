import type { Profile } from "@/common/providers/AuthProvider";

const STORAGE_KEY = "current_user";

// 랜덤 ID 생성 (영숫자만 사용)
const generateRandomId = (): string => {
  // UUID 생성 후 하이픈 제거
  const uuid = crypto.randomUUID().replace(/-/g, "");
  return "user_" + uuid;
};

// 새 사용자 생성
export const createUser = (name: string, email?: string): Profile => {
  return {
    id: generateRandomId(),
    name,
    email,
    type: "USER",
  };
};

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
  // if (typeof window === "undefined") return null;

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
