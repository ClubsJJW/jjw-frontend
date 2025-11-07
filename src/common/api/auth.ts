import { apiClient } from "./client";

// 로그인 요청 타입
export interface LoginRequest {
  nickname: string;
  password: string;
}

// 로그인 응답 타입
export interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    userId: number;
    nickname: string;
    token: string;
  };
}

// 사용자 정보 응답 타입
export interface UserInfoResponse {
  success: boolean;
  data: {
    userId: number;
    nickname: string;
  };
}

// 로그인 API
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("/user/login", data);
  return response.data;
};

// 사용자 정보 조회 API
export const getUserInfo = async (): Promise<UserInfoResponse> => {
  const response = await apiClient.get<UserInfoResponse>("/user/get-user-id");
  return response.data;
};
