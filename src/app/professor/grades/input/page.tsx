"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import { Text, Button, Box, Select, TextField } from "@channel.io/bezier-react";

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
    text-align: center;
    font-size: 15px;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
    font-size: 16px;
  }

  input {
    width: 80px;
    padding: 8px;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    text-align: center;
    font-size: 15px;
  }
`;

const FilterBox = styled.div`
  padding: 24px;
  background: white;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
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

const GradeInput = styled.input<{ $isModified?: boolean }>`
  background: ${(props) => (props.$isModified ? "#fff3cd" : "white")};
`;

export default function ProfessorGradesInputPage() {
  const searchParams = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState("CS201-01");

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <PageContainer>
      <PageHeader>
        <Text typo="36" bold>
          성적 입력
        </Text>
        <Text typo="18" color="txt-black-darker" style={{ marginTop: "12px" }}>
          학생들의 성적을 입력하고 관리합니다
        </Text>
      </PageHeader>

      <Section id="guidelines">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          📢 성적 입력 안내
        </Text>
        <InfoBox>
          <Text typo="16" bold style={{ marginBottom: "12px" }}>
            1. 성적 입력 기간
          </Text>
          <Text typo="16" color="txt-black-darker">
            - 중간고사: 2024년 4월 1일 ~ 4월 10일
            <br />- 기말고사: 2024년 6월 10일 ~ 6월 20일
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="16" bold style={{ marginBottom: "12px" }}>
            2. 성적 평가 기준
          </Text>
          <Text typo="16" color="txt-black-darker">
            - 출석: 20%
            <br />
            - 과제: 20%
            <br />
            - 중간고사: 30%
            <br />- 기말고사: 30%
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="16" bold style={{ marginBottom: "12px" }}>
            3. 등급 분포
          </Text>
          <Text typo="16" color="txt-black-darker">
            - A등급(A+, A0): 30% 이내
            <br />
            - B등급(B+, B0): 40% 이내
            <br />- C등급 이하: 나머지
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="16" bold style={{ marginBottom: "12px" }}>
            4. 유의사항
          </Text>
          <Text typo="16" color="txt-black-darker">
            - 입력 후 반드시 임시저장 버튼을 눌러주세요
            <br />
            - 최종 제출 후에는 수정이 불가능합니다
            <br />- 성적 이의신청 기간: 제출 후 1주일
          </Text>
        </InfoBox>
      </Section>

      <Section id="course-select">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          강의 선택
        </Text>
        <FilterBox>
          <Text typo="16" style={{ minWidth: "100px" }}>
            담당 강의
          </Text>
          <Select
            placeholder="강의를 선택하세요"
            style={{ width: "400px", fontSize: "16px" }}
          />
          <Button text="조회" size="l" colorVariant="blue" />
        </FilterBox>
      </Section>

      <Section id="grade-distribution">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          현재 등급 분포 - 자료구조 (CS201-01)
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>등급</th>
                <th>인원</th>
                <th>비율</th>
                <th>평균 점수</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "#e3f2fd" }}>
                <td>A+</td>
                <td>8명</td>
                <td>16%</td>
                <td>95.5</td>
              </tr>
              <tr style={{ background: "#e3f2fd" }}>
                <td>A0</td>
                <td>7명</td>
                <td>14%</td>
                <td>91.2</td>
              </tr>
              <tr style={{ background: "#fff3e0" }}>
                <td>B+</td>
                <td>10명</td>
                <td>20%</td>
                <td>85.8</td>
              </tr>
              <tr style={{ background: "#fff3e0" }}>
                <td>B0</td>
                <td>12명</td>
                <td>24%</td>
                <td>81.3</td>
              </tr>
              <tr>
                <td>C+</td>
                <td>8명</td>
                <td>16%</td>
                <td>75.6</td>
              </tr>
              <tr>
                <td>C0</td>
                <td>3명</td>
                <td>6%</td>
                <td>71.2</td>
              </tr>
              <tr>
                <td>D+</td>
                <td>1명</td>
                <td>2%</td>
                <td>65.0</td>
              </tr>
              <tr>
                <td>F</td>
                <td>1명</td>
                <td>2%</td>
                <td>45.0</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Box marginTop={24} padding={24} backgroundColor="bg-white-normal" borderRadius="8px">
          <Text typo="16">
            <strong>A등급 비율:</strong> 30% (기준 이내) |{" "}
            <strong>B등급 비율:</strong> 44% (기준 초과 4%) |{" "}
            <strong>평균 평점:</strong> 3.42
          </Text>
        </Box>
      </Section>

      <Section id="grade-input">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          성적 입력 - 자료구조 (CS201-01)
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>학번</th>
                <th>이름</th>
                <th>출석<br/>(20%)</th>
                <th>과제<br/>(20%)</th>
                <th>중간고사<br/>(30%)</th>
                <th>기말고사<br/>(30%)</th>
                <th>총점</th>
                <th>등급</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20230001</td>
                <td>김철수</td>
                <td><GradeInput type="number" defaultValue="20" /></td>
                <td><GradeInput type="number" defaultValue="18" /></td>
                <td><GradeInput type="number" defaultValue="28" /></td>
                <td><GradeInput type="number" defaultValue="29" /></td>
                <td>95.0</td>
                <td>A+</td>
              </tr>
              <tr>
                <td>20230002</td>
                <td>이영희</td>
                <td><GradeInput type="number" defaultValue="19" /></td>
                <td><GradeInput type="number" defaultValue="19" /></td>
                <td><GradeInput type="number" defaultValue="27" /></td>
                <td><GradeInput type="number" defaultValue="28" /></td>
                <td>93.0</td>
                <td>A+</td>
              </tr>
              <tr>
                <td>20230003</td>
                <td>박민수</td>
                <td><GradeInput type="number" defaultValue="20" /></td>
                <td><GradeInput type="number" defaultValue="17" /></td>
                <td><GradeInput type="number" defaultValue="28" /></td>
                <td><GradeInput type="number" defaultValue="27" /></td>
                <td>92.0</td>
                <td>A0</td>
              </tr>
              <tr>
                <td>20230004</td>
                <td>최지우</td>
                <td><GradeInput type="number" defaultValue="19" /></td>
                <td><GradeInput type="number" defaultValue="18" /></td>
                <td><GradeInput type="number" defaultValue="26" /></td>
                <td><GradeInput type="number" defaultValue="28" /></td>
                <td>91.0</td>
                <td>A0</td>
              </tr>
              <tr>
                <td>20230005</td>
                <td>정수진</td>
                <td><GradeInput type="number" defaultValue="18" /></td>
                <td><GradeInput type="number" defaultValue="17" /></td>
                <td><GradeInput type="number" defaultValue="25" /></td>
                <td><GradeInput type="number" defaultValue="26" /></td>
                <td>86.0</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>20230006</td>
                <td>강동원</td>
                <td><GradeInput type="number" defaultValue="19" /></td>
                <td><GradeInput type="number" defaultValue="16" /></td>
                <td><GradeInput type="number" defaultValue="25" /></td>
                <td><GradeInput type="number" defaultValue="25" /></td>
                <td>85.0</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>20230007</td>
                <td>윤서연</td>
                <td><GradeInput type="number" defaultValue="18" /></td>
                <td><GradeInput type="number" defaultValue="16" /></td>
                <td><GradeInput type="number" defaultValue="24" /></td>
                <td><GradeInput type="number" defaultValue="24" /></td>
                <td>82.0</td>
                <td>B0</td>
              </tr>
              <tr>
                <td>20230008</td>
                <td>임하은</td>
                <td><GradeInput type="number" defaultValue="17" /></td>
                <td><GradeInput type="number" defaultValue="16" /></td>
                <td><GradeInput type="number" defaultValue="24" /></td>
                <td><GradeInput type="number" defaultValue="24" /></td>
                <td>81.0</td>
                <td>B0</td>
              </tr>
              <tr>
                <td>20230009</td>
                <td>한지민</td>
                <td><GradeInput type="number" defaultValue="17" /></td>
                <td><GradeInput type="number" defaultValue="15" /></td>
                <td><GradeInput type="number" defaultValue="23" /></td>
                <td><GradeInput type="number" defaultValue="22" /></td>
                <td>77.0</td>
                <td>C+</td>
              </tr>
              <tr>
                <td>20230010</td>
                <td>오정세</td>
                <td><GradeInput type="number" defaultValue="16" /></td>
                <td><GradeInput type="number" defaultValue="14" /></td>
                <td><GradeInput type="number" defaultValue="22" /></td>
                <td><GradeInput type="number" defaultValue="21" /></td>
                <td>73.0</td>
                <td>C0</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="grade-adjustment">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          일괄 성적 조정
        </Text>
        <Box padding={24} backgroundColor="bg-white-normal" borderRadius="8px">
          <Text typo="16" style={{ marginBottom: "20px" }}>
            전체 학생의 점수를 일괄적으로 조정할 수 있습니다
          </Text>
          <FlexBox $gap={16} $align="center" $marginBottom={16}>
            <Text typo="16" style={{ minWidth: "120px" }}>조정 방식</Text>
            <Select placeholder="점수 더하기" style={{ width: "200px" }} />
          </FlexBox>
          <FlexBox $gap={16} $align="center" $marginBottom={16}>
            <Text typo="16" style={{ minWidth: "120px" }}>조정 점수</Text>
            <TextField placeholder="예: 5" style={{ width: "200px" }} />
          </FlexBox>
          <FlexBox $gap={16} $align="center" $marginBottom={24}>
            <Text typo="16" style={{ minWidth: "120px" }}>적용 대상</Text>
            <Select placeholder="전체 학생" style={{ width: "200px" }} />
          </FlexBox>
          <Button text="조정 적용" size="l" colorVariant="monochrome-dark" />
        </Box>
      </Section>

      <Section id="statistics">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          성적 통계
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>항목</th>
                <th>최고점</th>
                <th>최저점</th>
                <th>평균</th>
                <th>표준편차</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>출석</td>
                <td>20.0</td>
                <td>16.0</td>
                <td>18.3</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>과제</td>
                <td>19.0</td>
                <td>14.0</td>
                <td>16.6</td>
                <td>1.5</td>
              </tr>
              <tr>
                <td>중간고사</td>
                <td>28.0</td>
                <td>22.0</td>
                <td>25.2</td>
                <td>1.8</td>
              </tr>
              <tr>
                <td>기말고사</td>
                <td>29.0</td>
                <td>21.0</td>
                <td>25.4</td>
                <td>2.1</td>
              </tr>
              <tr style={{ fontWeight: "bold" }}>
                <td>총점</td>
                <td>95.0</td>
                <td>73.0</td>
                <td>85.5</td>
                <td>6.2</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="save">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          성적 저장 및 제출
        </Text>
        <Box padding={24} backgroundColor="bg-white-normal" borderRadius="8px">
          <Text typo="16" color="txt-black-darker" style={{ marginBottom: "24px" }}>
            입력한 성적을 확인하고 저장하세요. 최종 제출 후에는 수정이 불가능합니다.
          </Text>
          <Box display="flex" gap={16}>
            <Button text="임시 저장" size="xl" colorVariant="monochrome-dark" />
            <Button text="미리보기" size="xl" colorVariant="monochrome-light" />
            <Button text="최종 제출" size="xl" colorVariant="blue" />
          </Box>
        </Box>
      </Section>

      <Section id="history">
        <Text typo="24" bold style={{ marginBottom: "20px" }}>
          성적 입력 이력
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>과목</th>
                <th>학기</th>
                <th>입력 인원</th>
                <th>평균 평점</th>
                <th>제출 일시</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>자료구조</td>
                <td>2024-1</td>
                <td>50명</td>
                <td>3.42</td>
                <td>2024.06.15 14:30</td>
                <td>임시저장</td>
              </tr>
              <tr>
                <td>컴퓨터 개론</td>
                <td>2023-2</td>
                <td>45명</td>
                <td>3.35</td>
                <td>2023.12.18 16:20</td>
                <td>제출완료</td>
              </tr>
              <tr>
                <td>알고리즘</td>
                <td>2023-2</td>
                <td>42명</td>
                <td>3.58</td>
                <td>2023.12.17 11:45</td>
                <td>제출완료</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>
    </PageContainer>
  );
}
