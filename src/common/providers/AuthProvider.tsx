"use client";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import Cookies from "js-cookie";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  createUser,
  loadCurrentUser,
  saveCurrentUser,
} from "../utils/userStorage";

export type Profile = {
  id: string;
  name: string;
  type: string;
  email?: string;
};

interface LoginData {
  name: string;
  email?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
  profile: Profile | undefined;
}

const CHANNEL_PLUGIN_KEY = "e0685dec-5603-4aee-b4b1-8f2e75d9befd";

// "-veil-id"와 "-session"이 포함된 모든 쿠키와 로컬스토리지 삭제
const clearChannelData = () => {
  // 1. 모든 쿠키 확인 및 삭제
  const allCookies = document.cookie.split(";");
  allCookies.forEach((cookie) => {
    const cookieName = cookie.split("=")[0].trim();
    // "-veil-id" 또는 "-session"이 포함된 쿠키 삭제
    if (cookieName.includes("-veil-id") || cookieName.includes("-session")) {
      Cookies.remove(cookieName);
      // 다양한 도메인/경로에서도 삭제 시도
      Cookies.remove(cookieName, { path: "/" });
      Cookies.remove(cookieName, {
        path: "/",
        domain: window.location.hostname,
      });
      const parts = window.location.hostname.split(".");
      if (parts.length > 1) {
        const domain = parts.slice(-2).join(".");
        Cookies.remove(cookieName, { path: "/", domain: `.${domain}` });
      }
    }
  });

  // 2. 로컬스토리지에서 "-veil-id"와 "-session"이 포함된 항목 삭제
  const localStorageKeys = Object.keys(localStorage);
  localStorageKeys.forEach((key) => {
    if (key.includes("-veil-id") || key.includes("-session")) {
      localStorage.removeItem(key);
    }
  });
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);

  useEffect(() => {
    const currentUser = loadCurrentUser();
    if (currentUser) {
      setTimeout(() => {
        setProfile(currentUser);
      }, 0);
    }
  }, []);

  useEffect(() => {
    // Channel Talk
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: CHANNEL_PLUGIN_KEY,
      memberId: profile?.id ? profile?.id.toString() : undefined,
      profile:
        profile !== undefined
          ? {
              name: profile.name,
              email: profile?.email || null,
            }
          : undefined,
    });
  }, [profile]);

  const login = (data: LoginData) => {
    const newProfile = createUser(data.name, data.email);
    setProfile(newProfile);
    saveCurrentUser(newProfile);

    // 채널톡 프로필 업데이트
    ChannelService.updateUser({
      profile: {
        name: newProfile.name,
        email: newProfile.email || null,
      },
    });
  };

  const logout = () => {
    setProfile(undefined);
    saveCurrentUser(null);

    // 채널톡 쿠키 및 로컬스토리지 완전 삭제
    clearChannelData();
  };

  const value = useMemo(
    () => ({
      isLoggedIn: profile !== undefined,
      login,
      logout,
      profile,
    }),
    [profile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
