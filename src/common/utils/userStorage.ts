import type { Profile } from "@/common/providers/AuthProvider";
import { ANONYMOUS_MEMBER_ID_KEY, STORAGE_KEY, TOKEN_KEY } from "../constants";

// 랜덤 익명 ID 생성 함수: anonymous_${timestamp}_${random}
const generateAnonymousId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `anonymous_${timestamp}_${random}`;
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

// 익명 사용자 memberId 불러오기 (없으면 생성)
export const getAnonymousMemberId = (): string => {
  if (typeof window === "undefined") return generateAnonymousId();

  let memberId = localStorage.getItem(ANONYMOUS_MEMBER_ID_KEY);
  if (!memberId) {
    memberId = generateAnonymousId();
    localStorage.setItem(ANONYMOUS_MEMBER_ID_KEY, memberId);
  }
  return memberId;
};

// 익명 사용자 memberId 재생성
export const regenerateAnonymousMemberId = (): string => {
  if (typeof window === "undefined") return generateAnonymousId();

  const newMemberId = generateAnonymousId();
  localStorage.setItem(ANONYMOUS_MEMBER_ID_KEY, newMemberId);
  return newMemberId;
};

// 익명 사용자 memberId 삭제
export const removeAnonymousMemberId = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ANONYMOUS_MEMBER_ID_KEY);
};
