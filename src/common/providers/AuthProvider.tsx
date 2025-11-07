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

    // 채널톡을 익명으로 전환
    ChannelService.shutdown();

    Cookies.remove("x-veil-id");
    Cookies.remove("x-session");
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
