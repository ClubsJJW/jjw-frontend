"use client";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import React, { createContext, ReactNode, useContext, useEffect } from "react";

export type Profile = {
  id: number;
  name: string;
  type: string;
  email?: string;
};
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  profile: Profile | undefined;
}

const mockProfile: Profile = {
  id: 1,
  name: "John Doe",
  type: "ADMIN",
  email: "john.doe@example.com",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Channel Talk
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: "e0685dec-5603-4aee-b4b1-8f2e75d9befd",
      memberId: mockProfile?.id ? mockProfile?.id.toString() : undefined,
      profile:
        mockProfile !== undefined
          ? {
              name: mockProfile.name,
              email: mockProfile?.email || null,
            }
          : undefined,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: true,
        login: () => {},
        logout: () => {},
        profile: mockProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
