import axios from "axios";

// API Base URL (환경변수로 관리 가능)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Axios 인스턴스 생성
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10초 타임아웃
});

// Request Interceptor: 토큰 자동 추가
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: 에러 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 네트워크 에러 처리
    if (error.code === "ERR_NETWORK" || error.message === "Network Error") {
      console.error(
        "서버에 연결할 수 없습니다. API 서버가 실행 중인지 확인하세요."
      );
      return Promise.reject(
        new Error(
          `서버에 연결할 수 없습니다. (${API_BASE_URL})\nAPI 서버가 실행 중인지 확인하세요.`
        )
      );
    }

    // 타임아웃 에러
    if (error.code === "ECONNABORTED") {
      console.error("요청 시간 초과");
      return Promise.reject(
        new Error("요청 시간이 초과되었습니다. 다시 시도해주세요.")
      );
    }

    // 401 Unauthorized - 토큰 만료
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
        window.location.href = "/login";
      }
      return Promise.reject(
        new Error("인증이 만료되었습니다. 다시 로그인해주세요.")
      );
    }

    // 기타 HTTP 에러
    if (error.response) {
      console.error("API 에러:", error.response.status, error.response.data);
      const message =
        error.response.data?.message ||
        `서버 오류가 발생했습니다. (${error.response.status})`;
      return Promise.reject(new Error(message));
    }

    return Promise.reject(error);
  }
);
