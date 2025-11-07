"use client";

import styled from "styled-components";
import { Text, Button, Box, Select } from "@channel.io/bezier-react";

const PageContainer = styled.div``;

const PageHeader = styled.div`
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e9ecef;
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 8px;
  scroll-margin-top: 20px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;

  th,
  td {
    padding: 12px;
    border: 1px solid #e9ecef;
    text-align: center;
    font-size: 15px;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
  }
`;

const StatBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const StatCard = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  text-align: center;
`;

const FilterBox = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export default function SemesterGradesPage() {
  return (
    <PageContainer>
      <PageHeader>
        <Text typo="30" bold style={{ display: "block" }}>
          학기별 성적 조회
        </Text>
        <Text typo="16" color="txt-black-darker" style={{ marginTop: "8px", display: "block" }}>
          학기별로 취득한 성적을 확인할 수 있습니다
        </Text>
      </PageHeader>

      <Section id="filter">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          조회 조건
        </Text>
        <FilterBox>
          <Text typo="14" style={{ minWidth: "60px", display: "block" }}>
            학년도
          </Text>
          <Select placeholder="2025" style={{ width: "150px" }} />
          <Text typo="14" style={{ minWidth: "60px", display: "block" }}>
            학기
          </Text>
          <Select placeholder="2학기" style={{ width: "150px" }} />
          <Button text="조회" size="m" colorVariant="blue" />
        </FilterBox>
      </Section>

      <Section id="summary">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          학기 성적 요약
        </Text>
        <StatBox>
          <StatCard>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginBottom: "8px", display: "block" }}
            >
              신청 학점
            </Text>
            <Text typo="24" bold style={{ display: "block" }}>
              18학점
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginBottom: "8px", display: "block" }}
            >
              취득 학점
            </Text>
            <Text typo="24" bold style={{ display: "block" }}>
              18학점
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginBottom: "8px", display: "block" }}
            >
              학기 평점
            </Text>
            <Text typo="24" bold style={{ display: "block" }}>
              3.85
            </Text>
          </StatCard>
          <StatCard>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginBottom: "8px", display: "block" }}
            >
              누적 평점
            </Text>
            <Text typo="24" bold style={{ display: "block" }}>
              3.72
            </Text>
          </StatCard>
        </StatBox>
      </Section>

      <Section id="grades-2025-2">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          2025학년도 2학기 성적
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>과목코드</th>
                <th>과목명</th>
                <th>구분</th>
                <th>학점</th>
                <th>담당교수</th>
                <th>등급</th>
                <th>평점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CS201</td>
                <td>자료구조</td>
                <td>전공필수</td>
                <td>3</td>
                <td>이교수</td>
                <td>A+</td>
                <td>4.5</td>
              </tr>
              <tr>
                <td>CS202</td>
                <td>알고리즘</td>
                <td>전공필수</td>
                <td>3</td>
                <td>박교수</td>
                <td>A0</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td>CS203</td>
                <td>이산수학</td>
                <td>전공필수</td>
                <td>3</td>
                <td>김교수</td>
                <td>B+</td>
                <td>3.5</td>
              </tr>
              <tr>
                <td>CS204</td>
                <td>프로그래밍 언어론</td>
                <td>전공선택</td>
                <td>3</td>
                <td>최교수</td>
                <td>A0</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td>GE201</td>
                <td>영어회화</td>
                <td>교양필수</td>
                <td>3</td>
                <td>Smith</td>
                <td>A+</td>
                <td>4.5</td>
              </tr>
              <tr>
                <td>GE202</td>
                <td>글쓰기</td>
                <td>교양선택</td>
                <td>3</td>
                <td>한교수</td>
                <td>B+</td>
                <td>3.5</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="grades-2025-1">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          2025학년도 1학기 성적
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>과목코드</th>
                <th>과목명</th>
                <th>구분</th>
                <th>학점</th>
                <th>담당교수</th>
                <th>등급</th>
                <th>평점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CS101</td>
                <td>컴퓨터 개론</td>
                <td>전공필수</td>
                <td>3</td>
                <td>김교수</td>
                <td>A0</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td>CS102</td>
                <td>프로그래밍 기초</td>
                <td>전공필수</td>
                <td>3</td>
                <td>이교수</td>
                <td>B+</td>
                <td>3.5</td>
              </tr>
              <tr>
                <td>MATH101</td>
                <td>미적분학</td>
                <td>전공기초</td>
                <td>3</td>
                <td>정교수</td>
                <td>B0</td>
                <td>3.0</td>
              </tr>
              <tr>
                <td>MATH102</td>
                <td>선형대수학</td>
                <td>전공기초</td>
                <td>3</td>
                <td>강교수</td>
                <td>A0</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td>GE101</td>
                <td>대학영어</td>
                <td>교양필수</td>
                <td>3</td>
                <td>Johnson</td>
                <td>A+</td>
                <td>4.5</td>
              </tr>
              <tr>
                <td>GE103</td>
                <td>체육</td>
                <td>교양필수</td>
                <td>1</td>
                <td>윤교수</td>
                <td>P</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="grade-stats">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          학기별 평점 추이
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>학년도</th>
                <th>학기</th>
                <th>신청학점</th>
                <th>취득학점</th>
                <th>학기평점</th>
                <th>누적평점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025</td>
                <td>2학기</td>
                <td>18</td>
                <td>18</td>
                <td>3.85</td>
                <td>3.72</td>
              </tr>
              <tr>
                <td>2025</td>
                <td>1학기</td>
                <td>16</td>
                <td>16</td>
                <td>3.58</td>
                <td>3.58</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="credit-summary">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          이수 학점 현황
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>구분</th>
                <th>이수 학점</th>
                <th>필요 학점</th>
                <th>잔여 학점</th>
                <th>달성률</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>전공필수</td>
                <td>21</td>
                <td>45</td>
                <td>24</td>
                <td>46.7%</td>
              </tr>
              <tr>
                <td>전공선택</td>
                <td>6</td>
                <td>30</td>
                <td>24</td>
                <td>20.0%</td>
              </tr>
              <tr>
                <td>교양필수</td>
                <td>9</td>
                <td>18</td>
                <td>9</td>
                <td>50.0%</td>
              </tr>
              <tr>
                <td>교양선택</td>
                <td>3</td>
                <td>12</td>
                <td>9</td>
                <td>25.0%</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>합계</td>
                <td style={{ fontWeight: "bold" }}>39</td>
                <td style={{ fontWeight: "bold" }}>130</td>
                <td style={{ fontWeight: "bold" }}>91</td>
                <td style={{ fontWeight: "bold" }}>30.0%</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="actions">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          기타 기능
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal" style={{ display: "flex", gap: "12px" }}>
          <Button text="성적 증명서 발급" size="l" colorVariant="blue" />
          <Button
            text="성적 이의 신청"
            size="l"
            colorVariant="monochrome-dark"
          />
          <Button
            text="PDF 다운로드"
            size="l"
            colorVariant="monochrome-light"
          />
        </Box>
      </Section>
    </PageContainer>
  );
}
