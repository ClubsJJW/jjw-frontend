"use client";

import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { navigationMenu } from "@/common/types/navigation";

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
  return (
    <LayoutContainer>
      <Sidebar menuItems={navigationMenu} />
      <MainContent>
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
}
