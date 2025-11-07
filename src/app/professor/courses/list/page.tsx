"use client";

import styled from "styled-components";
import { Text, Button, Box } from "@channel.io/bezier-react";

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

const CourseCard = styled.div`
  padding: 28px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  margin-bottom: 16px;
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

export default function ProfessorCoursesListPage() {
  return (
    <PageContainer>
      <PageHeader>
        <Text typo="36" bold style={{ display: "block" }}>
          담당 강의 관리
        </Text>
        <Text typo="18" color="txt-black-darker" style={{ marginTop: "12px", display: "block" }}>
          2024학년도 1학기 담당 강의 목록입니다
        </Text>
      </PageHeader>

      <Section id="summary">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          강의 현황
        </Text>
        <StatBox>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              담당 강의
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              5과목
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              총 수강 인원
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              187명
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              총 강의 시수
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              15시간
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="16"
              color="txt-black-darker"
              style={{ marginBottom: "12px", display: "block" }}
            >
              미제출 과제
            </Text>
            <Text typo="30" bold style={{ display: "block" }}>
              23건
            </Text>
          </StatCard>
        </StatBox>
      </Section>

      <Section id="course-list">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          담당 강의 목록
        </Text>

        <CourseCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <Text typo="22" bold style={{ marginBottom: "8px", display: "block" }}>
                컴퓨터 개론 (CS101-01)
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                월/수 10:00-11:30 | 공학관 101호
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="강의실 입장" size="l" colorVariant="blue" />
              <Button text="관리" size="l" colorVariant="monochrome-dark" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  수강 인원
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  45명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  출석률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  92%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  과제 제출률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  88%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  강의 평가
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  4.5/5.0
                </Text>
              </div>
            </Box>
          </Box>
        </CourseCard>

        <CourseCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <Text typo="22" bold style={{ marginBottom: "8px", display: "block" }}>
                자료구조 (CS201-01)
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                화/목 13:00-14:30 | 공학관 201호
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="강의실 입장" size="l" colorVariant="blue" />
              <Button text="관리" size="l" colorVariant="monochrome-dark" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  수강 인원
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  50명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  출석률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  89%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  과제 제출률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  85%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  강의 평가
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  4.3/5.0
                </Text>
              </div>
            </Box>
          </Box>
        </CourseCard>

        <CourseCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <Text typo="22" bold style={{ marginBottom: "8px", display: "block" }}>
                알고리즘 (CS202-01)
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                월/수 13:00-14:30 | 공학관 301호
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="강의실 입장" size="l" colorVariant="blue" />
              <Button text="관리" size="l" colorVariant="monochrome-dark" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  수강 인원
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  42명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  출석률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  94%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  과제 제출률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  91%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  강의 평가
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  4.7/5.0
                </Text>
              </div>
            </Box>
          </Box>
        </CourseCard>

        <CourseCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <Text typo="22" bold style={{ marginBottom: "8px", display: "block" }}>
                데이터베이스 (CS302-01)
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                월/수 15:00-16:30 | 공학관 501호
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="강의실 입장" size="l" colorVariant="blue" />
              <Button text="관리" size="l" colorVariant="monochrome-dark" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  수강 인원
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  40명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  출석률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  87%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  과제 제출률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  82%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  강의 평가
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  4.4/5.0
                </Text>
              </div>
            </Box>
          </Box>
        </CourseCard>

        <CourseCard>
          <FlexBox $justify="space-between" $align="start" $marginBottom={16}>
            <div>
              <Text typo="22" bold style={{ marginBottom: "8px", display: "block" }}>
                캡스톤 디자인 (CS401-01)
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                금 13:00-17:00 | 공학관 801호
              </Text>
            </div>
            <Box style={{ display: "flex", gap: "12px" }}>
              <Button text="강의실 입장" size="l" colorVariant="blue" />
              <Button text="관리" size="l" colorVariant="monochrome-dark" />
            </Box>
          </FlexBox>
          <Box marginTop={20} padding={20} backgroundColor="bg-black-lighter">
            <Box>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  수강 인원
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  10명
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  출석률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  98%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  과제 제출률
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  95%
                </Text>
              </div>
              <div>
                <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                  강의 평가
                </Text>
                <Text typo="18" bold style={{ marginTop: "4px", display: "block" }}>
                  4.9/5.0
                </Text>
              </div>
            </Box>
          </Box>
        </CourseCard>
      </Section>

      <Section id="schedule">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          주간 강의 일정
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>시간</th>
                <th>월요일</th>
                <th>화요일</th>
                <th>수요일</th>
                <th>목요일</th>
                <th>금요일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00-10:00</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>10:00-11:30</td>
                <td>
                  컴퓨터 개론
                  <br />
                  공학관 101
                </td>
                <td>-</td>
                <td>
                  컴퓨터 개론
                  <br />
                  공학관 101
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>13:00-14:30</td>
                <td>
                  알고리즘
                  <br />
                  공학관 301
                </td>
                <td>
                  자료구조
                  <br />
                  공학관 201
                </td>
                <td>
                  알고리즘
                  <br />
                  공학관 301
                </td>
                <td>
                  자료구조
                  <br />
                  공학관 201
                </td>
                <td>
                  캡스톤 디자인
                  <br />
                  공학관 801
                </td>
              </tr>
              <tr>
                <td>15:00-16:30</td>
                <td>
                  데이터베이스
                  <br />
                  공학관 501
                </td>
                <td>-</td>
                <td>
                  데이터베이스
                  <br />
                  공학관 501
                </td>
                <td>-</td>
                <td>
                  캡스톤 디자인
                  <br />
                  공학관 801
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="pending-tasks">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          처리해야 할 업무
        </Text>
        <InfoBox>
          <FlexBox $justify="space-between" $align="center">
            <div>
              <Text typo="18" bold style={{ marginBottom: "8px", display: "block" }}>
                미채점 중간고사 답안
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                자료구조 (CS201-01) - 50건
              </Text>
            </div>
            <Button text="채점하기" size="l" colorVariant="blue" />
          </FlexBox>
        </InfoBox>
        <InfoBox>
          <FlexBox $justify="space-between" $align="center">
            <div>
              <Text typo="18" bold style={{ marginBottom: "8px", display: "block" }}>
                미확인 과제 제출물
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                알고리즘 (CS202-01) - 42건
              </Text>
            </div>
            <Button text="확인하기" size="l" colorVariant="blue" />
          </FlexBox>
        </InfoBox>
        <InfoBox>
          <FlexBox $justify="space-between" $align="center">
            <div>
              <Text typo="18" bold style={{ marginBottom: "8px", display: "block" }}>
                결석 사유서 검토
              </Text>
              <Text typo="16" color="txt-black-darker" style={{ display: "block" }}>
                컴퓨터 개론 (CS101-01) - 8건
              </Text>
            </div>
            <Button text="검토하기" size="l" colorVariant="blue" />
          </FlexBox>
        </InfoBox>
      </Section>

      <Section id="announcements">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          강의 공지사항 관리
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>과목</th>
                <th>제목</th>
                <th>작성일</th>
                <th>조회수</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>컴퓨터 개론</td>
                <td>중간고사 일정 변경 안내</td>
                <td>2024.02.10</td>
                <td>45</td>
                <td>
                  <Button text="수정" size="s" colorVariant="monochrome-dark" />
                </td>
              </tr>
              <tr>
                <td>자료구조</td>
                <td>과제 제출 기한 연장</td>
                <td>2024.02.08</td>
                <td>50</td>
                <td>
                  <Button text="수정" size="s" colorVariant="monochrome-dark" />
                </td>
              </tr>
              <tr>
                <td>알고리즘</td>
                <td>보강 일정 안내</td>
                <td>2024.02.05</td>
                <td>42</td>
                <td>
                  <Button text="수정" size="s" colorVariant="monochrome-dark" />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Box marginTop={20}>
          <Button text="새 공지사항 작성" size="l" colorVariant="blue" />
        </Box>
      </Section>

      <Section id="actions">
        <Text typo="24" bold style={{ marginBottom: "20px", display: "block" }}>
          빠른 작업
        </Text>
        <FlexBox $gap={16} $wrap="wrap">
          <Button text="강의 계획서 작성" size="xl" colorVariant="blue" />
          <Button text="출결 관리" size="xl" colorVariant="blue" />
          <Button text="성적 입력" size="xl" colorVariant="blue" />
          <Button
            text="강의 자료 업로드"
            size="xl"
            colorVariant="monochrome-dark"
          />
          <Button
            text="학생 상담 일정"
            size="xl"
            colorVariant="monochrome-dark"
          />
        </FlexBox>
      </Section>
    </PageContainer>
  );
}
