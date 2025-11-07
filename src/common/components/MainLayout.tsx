"use client";

import { navigationMenu } from "@/common/types/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constants";
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
  useEffect(() => {
    let eventSource = new EventSource(`${BASE_URL}`);

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
  }, []);

  return (
    <LayoutContainer>
      <Sidebar menuItems={navigationMenu} />
      <MainContent>
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
}
