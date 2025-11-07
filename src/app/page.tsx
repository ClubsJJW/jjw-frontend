"use client";

import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 60px 40px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #5568d3;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
`;

const Description = styled.div`
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  color: #888;
  line-height: 1.8;
`;

export default function Home() {
  return (
    <Container>
      <Card>
        <Title>Mock ERP System</Title>
        <Subtitle>
          복잡한 문서 검토 및 승인 시스템
          <br />
          Bad UX Demo
        </Subtitle>
        <ButtonLink href="/documents">
          문서 관리 시스템 입장
        </ButtonLink>
        <Description>
          <p>
            이 시스템은 의도적으로 나쁜 UX를 구현한 교육용 데모입니다.
          </p>
          <p style={{ marginTop: "10px" }}>
            문서를 승인/반려하기 위해서는 여러 단계의 복잡한 과정을 거쳐야 합니다.
          </p>
          <p style={{ marginTop: "10px", fontSize: "12px", color: "#999" }}>
            힌트: 문서 상세 페이지 → "Administrative Functions" 탭 → "Advanced Options" → "Final Processing Actions" → "Proceed to Final Assessment"
          </p>
        </Description>
      </Card>
    </Container>
  );
}
