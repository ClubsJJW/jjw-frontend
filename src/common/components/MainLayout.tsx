"use client";

import { navigationMenu } from "@/common/types/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constants";
import { useAuth } from "../providers/AuthProvider";
import { connectSSE } from "../utils/sseUtil";
import { Sidebar } from "./Sidebar";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  background: #ffffff;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding: 32px;
  max-width: 1400px;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { getMemberId } = useAuth();

  useEffect(() => {
    // memberId 가져오기 (로그인: profile.id, 비로그인: 익명 ID)
    const memberId = getMemberId();

    // SSE 연결 시 memberId를 쿼리 파라미터로 전달
    let eventSource = new EventSource(`${BASE_URL}?memberId=${memberId}`);

    const callConnectSSE = async () => {
      eventSource = await connectSSE(eventSource, (rawData) => {
        const data = JSON.parse(rawData);
        console.log(data);
      });
    };
    callConnectSSE();

    return () => {
      eventSource?.close();
    };
  }, [getMemberId]);

  return (
    <LayoutContainer>
      <Sidebar menuItems={navigationMenu} />
      <MainContent>
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
}
