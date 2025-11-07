"use client";

import styled from "styled-components";
import { Text, Button, Box, TextField } from "@channel.io/bezier-react";

const PageContainer = styled.div``;

const PageHeader = styled.div`
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 2px solid #e9ecef;
`;

const Section = styled.div`
  margin-bottom: 48px;
  padding: 32px;
  background: #f8f9fa;
  border-radius: 8px;
  scroll-margin-top: 20px;
`;

const InfoBox = styled.div`
  padding: 24px;
  background: white;
  border-radius: 6px;
  margin-bottom: 16px;
  border: 1px solid #e9ecef;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;

  th,
  td {
    padding: 16px;
    border: 1px solid #e9ecef;
    text-align: left;
    font-size: 15px;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
    font-size: 16px;
  }
`;

const StatBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  padding: 28px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  text-align: center;
`;

const ProjectCard = styled.div`
  padding: 28px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  margin-bottom: 16px;
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${(props) => {
    switch (props.$status) {
      case "진행중":
        return "#e3f2fd";
      case "완료":
        return "#e8f5e9";
      case "보류":
        return "#fff3e0";
      default:
        return "#f5f5f5";
    }
  }};
  color: ${(props) => {
    switch (props.$status) {
      case "진행중":
        return "#1976d2";
      case "완료":
        return "#388e3c";
      case "보류":
        return "#f57c00";
      default:
        return "#616161";
    }
  }};
`;

const FlexBox = styled.div<{
  $justify?: string;
  $align?: string;
  $gap?: number;
  $wrap?: string;
  $marginBottom?: number;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  gap: ${(props) => props.$gap || 0}px;
  flex-wrap: ${(props) => props.$wrap || "nowrap"};
  margin-bottom: ${(props) => props.$marginBottom || 0}px;
`;

export default function ProfessorResearchProjectsPage() {
  return (
    <PageContainer>
      <PageHeader>
        <Text typo="36" bold style={{ display: "block" }}>
          연구 과제 관리
        </Text>
        <Text typo="18" color="txt-black-darker" style={{ marginTop: "12px", display: "block" }}>
          진행중인 연구 과제와 연구비를 관리합니다
        </Text>
      </PageHeader>

      <Section id="summary">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          연구 현황
        </Text>
        <StatBox>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              진행중인 과제
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              3건
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              총 연구비
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              450백만원
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              논문 실적
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              12편
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              특허 출원
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              2건
            </Text>
          </StatCard>
        </StatBox>
      </Section>

      <Section id="active-projects">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          진행중인 연구 과제
        </Text>

        <ProjectCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <FlexBox $align="center" $gap={12} $marginBottom={12}>
                <Text typo="22" bold style={{ display: "block" }}>
                  딥러닝 기반 자연어 처리 시스템 개발
                </Text>
                <StatusBadge $status="진행중">진행중</StatusBadge>
              </FlexBox>
              <Text
                typo="16"
                color="txt-black-darker"
                style={{ marginBottom: "8px", display: "block" }}
              >
                연구 기관: 한국연구재단 | 과제 번호: NRF-2023-001234
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                연구 기간: 2023.03.01 ~ 2026.02.28 (3년)
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="상세보기" size="l" colorVariant="blue" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  총 연구비
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  300백만원
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  집행률
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  45%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  참여 연구원
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  5명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  진행률
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  60%
                </Text>
              </div>
            </Box>
          </Box>
          <Box marginTop={16}>
            <Text typo="16" bold style={{ marginBottom: "8px", display: "block" }}>
              주요 성과
            </Text>
            <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
              - SCI 논문 게재 2편 (IF 3.5, 4.2)
              <br />
              - 국제 학회 발표 3건
              <br />- 특허 출원 1건
            </Text>
          </Box>
        </ProjectCard>

        <ProjectCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <FlexBox $align="center" $gap={12} $marginBottom={12}>
                <Text typo="22" bold style={{ display: "block" }}>
                  블록체인 기반 분산 시스템 연구
                </Text>
                <StatusBadge $status="진행중">진행중</StatusBadge>
              </FlexBox>
              <Text
                typo="16"
                color="txt-black-darker"
                style={{ marginBottom: "8px", display: "block" }}
              >
                연구 기관: 정보통신기획평가원 | 과제 번호: IITP-2024-002345
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                연구 기간: 2024.01.01 ~ 2025.12.31 (2년)
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="상세보기" size="l" colorVariant="blue" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  총 연구비
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  100백만원
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  집행률
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  25%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  참여 연구원
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  3명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  진행률
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  30%
                </Text>
              </div>
            </Box>
          </Box>
          <Box marginTop={16}>
            <Text typo="16" bold style={{ marginBottom: "8px", display: "block" }}>
              주요 성과
            </Text>
            <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
              - 국내 학회 논문 1편
              <br />- 프로토타입 시스템 개발 완료
            </Text>
          </Box>
        </ProjectCard>

        <ProjectCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <FlexBox $align="center" $gap={12} $marginBottom={12}>
                <Text typo="22" bold style={{ display: "block" }}>
                  AI 윤리 및 책임성 연구
                </Text>
                <StatusBadge $status="진행중">진행중</StatusBadge>
              </FlexBox>
              <Text
                typo="16"
                color="txt-black-darker"
                style={{ marginBottom: "8px", display: "block" }}
              >
                연구 기관: 교육부 | 과제 번호: MOE-2024-003456
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                연구 기간: 2024.03.01 ~ 2024.12.31 (1년)
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="상세보기" size="l" colorVariant="blue" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  총 연구비
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  50백만원
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  집행률
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  35%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  참여 연구원
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  2명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  진행률
                </Text>
                <Text typo="22" bold style={{ marginTop: "6px", display: "block" }}>
                  40%
                </Text>
              </div>
            </Box>
          </Box>
          <Box marginTop={16}>
            <Text typo="16" bold style={{ marginBottom: "8px", display: "block" }}>
              주요 성과
            </Text>
            <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
              - 연구 보고서 2편 제출
              <br />- 정책 제안서 작성 중
            </Text>
          </Box>
        </ProjectCard>
      </Section>

      <Section id="budget-status">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          연구비 집행 현황
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>과제명</th>
                <th>총 연구비</th>
                <th>집행액</th>
                <th>잔액</th>
                <th>집행률</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>딥러닝 기반 자연어 처리 시스템 개발</td>
                <td>300,000,000원</td>
                <td>135,000,000원</td>
                <td>165,000,000원</td>
                <td>45%</td>
                <td>
                  <Button text="상세보기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>블록체인 기반 분산 시스템 연구</td>
                <td>100,000,000원</td>
                <td>25,000,000원</td>
                <td>75,000,000원</td>
                <td>25%</td>
                <td>
                  <Button text="상세보기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>AI 윤리 및 책임성 연구</td>
                <td>50,000,000원</td>
                <td>17,500,000원</td>
                <td>32,500,000원</td>
                <td>35%</td>
                <td>
                  <Button text="상세보기" size="s" colorVariant="blue" />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="recent-expenses">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          최근 연구비 사용 내역
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>일자</th>
                <th>과제명</th>
                <th>항목</th>
                <th>금액</th>
                <th>내용</th>
                <th>증빙</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.02.14</td>
                <td>딥러닝 NLP 시스템</td>
                <td>연구 장비</td>
                <td>15,000,000원</td>
                <td>GPU 서버 구매</td>
                <td>
                  <Button
                    text="첨부파일"
                    size="s"
                    colorVariant="monochrome-dark"
                  />
                </td>
              </tr>
              <tr>
                <td>2024.02.12</td>
                <td>블록체인 분산 시스템</td>
                <td>인건비</td>
                <td>3,500,000원</td>
                <td>연구원 급여 (2월)</td>
                <td>
                  <Button
                    text="첨부파일"
                    size="s"
                    colorVariant="monochrome-dark"
                  />
                </td>
              </tr>
              <tr>
                <td>2024.02.10</td>
                <td>딥러닝 NLP 시스템</td>
                <td>출장비</td>
                <td>2,800,000원</td>
                <td>국제학회 참석 (미국)</td>
                <td>
                  <Button
                    text="첨부파일"
                    size="s"
                    colorVariant="monochrome-dark"
                  />
                </td>
              </tr>
              <tr>
                <td>2024.02.08</td>
                <td>AI 윤리 연구</td>
                <td>재료비</td>
                <td>850,000원</td>
                <td>설문조사 비용</td>
                <td>
                  <Button
                    text="첨부파일"
                    size="s"
                    colorVariant="monochrome-dark"
                  />
                </td>
              </tr>
              <tr>
                <td>2024.02.05</td>
                <td>블록체인 분산 시스템</td>
                <td>회의비</td>
                <td>450,000원</td>
                <td>연구진 회의</td>
                <td>
                  <Button
                    text="첨부파일"
                    size="s"
                    colorVariant="monochrome-dark"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Box marginTop={20} style={{ display: "flex", gap: "12px" }}>
          <Button text="연구비 사용 신청" size="l" colorVariant="blue" />
        </Box>
      </Section>

      <Section id="publications">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          연구 성과 - 논문
        </Text>
        <InfoBox>
          <Text typo="18" bold style={{ marginBottom: "12px", display: "block" }}>
            Deep Learning Approaches for Natural Language Understanding
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "8px", display: "block" }}
          >
            저자: 김교수, 이박사, 박연구원
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "8px", display: "block" }}
          >
            학술지: IEEE Transactions on Neural Networks and Learning Systems
            (IF: 4.2)
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "12px", display: "block" }}
          >
            게재일: 2024.01.15
          </Text>
          <Box style={{ display: "flex", gap: "12px" }}>
            <Button text="논문 보기" size="m" colorVariant="blue" />
          </Box>
        </InfoBox>

        <InfoBox>
          <Text typo="18" bold style={{ marginBottom: "12px", display: "block" }}>
            Blockchain-based Distributed System Architecture
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "8px", display: "block" }}
          >
            저자: 김교수, 최연구원
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "8px", display: "block" }}
          >
            학술지: Journal of Systems Architecture (IF: 3.5)
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "12px", display: "block" }}
          >
            게재일: 2023.11.20
          </Text>
          <Box style={{ display: "flex", gap: "12px" }}>
            <Button text="논문 보기" size="m" colorVariant="blue" />
          </Box>
        </InfoBox>

        <InfoBox>
          <Text typo="18" bold style={{ marginBottom: "12px", display: "block" }}>
            Ethical Considerations in AI Systems
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "8px", display: "block" }}
          >
            저자: 김교수, 정박사
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "8px", display: "block" }}
          >
            학술지: AI & Society (IF: 2.8)
          </Text>
          <Text
            typo="16"
            color="txt-black-darker"
            style={{ marginBottom: "12px", display: "block" }}
          >
            게재일: 2023.09.30
          </Text>
          <Box style={{ display: "flex", gap: "12px" }}>
            <Button text="논문 보기" size="m" colorVariant="blue" />
          </Box>
        </InfoBox>
      </Section>

      <Section id="reports">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          연구 보고서 제출
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>과제명</th>
                <th>보고서 유형</th>
                <th>제출 기한</th>
                <th>상태</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>딥러닝 기반 자연어 처리 시스템 개발</td>
                <td>연차 보고서</td>
                <td>2024.03.01</td>
                <td style={{ color: "#f57c00", fontWeight: "bold" }}>작성중</td>
                <td>
                  <Button text="작성하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>블록체인 기반 분산 시스템 연구</td>
                <td>분기 보고서</td>
                <td>2024.04.01</td>
                <td style={{ color: "#616161" }}>미작성</td>
                <td>
                  <Button text="작성하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>AI 윤리 및 책임성 연구</td>
                <td>중간 보고서</td>
                <td>2024.02.10</td>
                <td style={{ color: "#388e3c", fontWeight: "bold" }}>
                  제출완료
                </td>
                <td>
                  <Button text="보기" size="s" colorVariant="monochrome-dark" />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="quick-actions">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          빠른 작업
        </Text>
        <FlexBox $gap={16} $wrap="wrap">
          <Button text="새 과제 신청" size="xl" colorVariant="blue" />
          <Button text="연구비 사용 신청" size="xl" colorVariant="blue" />
          <Button
            text="연구 성과 등록"
            size="xl"
            colorVariant="monochrome-dark"
          />
          <Button text="보고서 작성" size="xl" colorVariant="monochrome-dark" />
          <Button
            text="연구실 관리"
            size="xl"
            colorVariant="monochrome-light"
          />
        </FlexBox>
      </Section>
    </PageContainer>
  );
}
