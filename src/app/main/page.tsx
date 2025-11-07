"use client";

import styled from "styled-components";
import { Text, Button, Box } from "@channel.io/bezier-react";
import { useAuth } from "@/common/providers/AuthProvider";

const PageHeader = styled.div`
  margin-bottom: 32px;
`;

const Section = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const Card = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

export default function Home() {
  const { profile, isLoggedIn } = useAuth();

  return (
    <div>
      <PageHeader>
        {isLoggedIn ? (
          <>
            <Text typo="30" bold>
              {profile?.name}님, 환영합니다!
            </Text>
            <Text typo="16" color="txt-black-darker" style={{ marginTop: "8px" }}>
              대학 포털 시스템에 로그인되었습니다
            </Text>
          </>
        ) : (
          <>
            <Text typo="30" bold>
              환영합니다!
            </Text>
            <Text typo="16" color="txt-black-darker" style={{ marginTop: "8px" }}>
              대학 포털 시스템입니다
            </Text>
          </>
        )}
      </PageHeader>

      <Section>
        <Text typo="22" bold>
          최근 공지사항
        </Text>
        <Box marginTop={16}>
          <Card style={{ marginBottom: "12px" }}>
            <Text typo="16" bold>
              2024학년도 1학기 수강신청 일정 안내
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              2024.02.15
            </Text>
          </Card>
          <Card style={{ marginBottom: "12px" }}>
            <Text typo="16" bold>
              장학금 신청 기간 연장 안내
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              2024.02.14
            </Text>
          </Card>
          <Card>
            <Text typo="16" bold>
              학사일정 변경 안내
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              2024.02.13
            </Text>
          </Card>
        </Box>
      </Section>
    </div>
  );
}
