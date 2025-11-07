"use client";

import styled from "styled-components";
import {
  Text,
  Button,
  Box,
  TextField,
  Checkbox,
} from "@channel.io/bezier-react";

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

const InfoBox = styled.div`
  padding: 16px;
  background: white;
  border-radius: 6px;
  margin-bottom: 12px;
  border: 1px solid #e9ecef;
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
    text-align: left;
    font-size: 15px;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const SearchBox = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
`;

export default function CourseRegistrationPage() {
  return (
    <PageContainer>
      <PageHeader>
        <Text typo="30" bold style={{ display: "block" }}>
          수강 신청
        </Text>
        <Text typo="16" color="txt-black-darker" style={{ marginTop: "8px", display: "block" }}>
          2025학년도 2학기 수강 신청
        </Text>
      </PageHeader>

      <Section id="schedule">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          📅 수강신청 일정
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>구분</th>
                <th>대상</th>
                <th>신청 기간</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1차 수강신청</td>
                <td>4학년</td>
                <td>2025.08.05 10:00 ~ 08.06 17:00</td>
                <td>졸업예정자 우선</td>
              </tr>
              <tr>
                <td>2차 수강신청</td>
                <td>3학년</td>
                <td>2025.08.07 10:00 ~ 08.08 17:00</td>
                <td>-</td>
              </tr>
              <tr>
                <td>3차 수강신청</td>
                <td>2학년</td>
                <td>2025.08.09 10:00 ~ 08.10 17:00</td>
                <td>-</td>
              </tr>
              <tr>
                <td>4차 수강신청</td>
                <td>1학년</td>
                <td>2025.08.11 10:00 ~ 08.12 17:00</td>
                <td>-</td>
              </tr>
              <tr>
                <td>수강정정</td>
                <td>전체</td>
                <td>2025.08.13 10:00 ~ 08.16 17:00</td>
                <td>변경 가능</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="guidelines">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          📢 수강신청 유의사항
        </Text>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px", display: "block" }}>
            1. 신청 학점
          </Text>
          <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
            - 최소 신청 학점: 12학점
            <br />
            - 최대 신청 학점: 21학점
            <br />- 직전 학기 평점 4.0 이상자는 최대 24학점까지 신청 가능
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px", display: "block" }}>
            2. 전공 필수 과목
          </Text>
          <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
            - 전공 필수 과목은 반드시 수강해야 합니다
            <br />- 미 이수 시 졸업이 불가능할 수 있습니다
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px", display: "block" }}>
            3. 선수 과목
          </Text>
          <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
            - 선수 과목을 이수하지 않은 경우 해당 과목 수강이 불가능합니다
            <br />- 선수 과목 정보는 강의 계획서에서 확인하세요
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px", display: "block" }}>
            4. 시간표 중복
          </Text>
          <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
            - 강의 시간이 중복되는 과목은 동시에 신청할 수 없습니다
            <br />- 시간표를 확인하여 신중하게 선택하세요
          </Text>
        </InfoBox>
      </Section>

      <Section id="search">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          강의 검색
        </Text>
        <SearchBox>
          <FilterRow>
            <Text typo="14" style={{ minWidth: "80px", display: "block" }}>
              과목명
            </Text>
            <TextField placeholder="과목명을 입력하세요" style={{ flex: 1 }} />
          </FilterRow>
          <FilterRow>
            <Text typo="14" style={{ minWidth: "80px", display: "block" }}>
              과목 코드
            </Text>
            <TextField
              placeholder="과목 코드를 입력하세요"
              style={{ flex: 1 }}
            />
          </FilterRow>
          <FilterRow>
            <Text typo="14" style={{ minWidth: "80px", display: "block" }}>
              담당 교수
            </Text>
            <TextField placeholder="교수명을 입력하세요" style={{ flex: 1 }} />
          </FilterRow>
          <FilterRow>
            <Checkbox>전공 과목만 보기</Checkbox>
            <Checkbox>교양 과목만 보기</Checkbox>
            <Checkbox>여석 있는 과목만 보기</Checkbox>
          </FilterRow>
          <ButtonGroup style={{ marginTop: "16px" }}>
            <Button text="초기화" size="m" colorVariant="monochrome-light" />
            <Button text="검색" size="m" colorVariant="blue" />
          </ButtonGroup>
        </SearchBox>
      </Section>

      <Section id="course-list">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          개설 강좌 목록
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
                <th>시간/강의실</th>
                <th>정원</th>
                <th>신청</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CS101</td>
                <td>컴퓨터 개론</td>
                <td>전공필수</td>
                <td>3</td>
                <td>김교수</td>
                <td>월/수 10:00-11:30 / 공학관 101</td>
                <td>45/50</td>
                <td>
                  <Button text="신청" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>CS201</td>
                <td>자료구조</td>
                <td>전공필수</td>
                <td>3</td>
                <td>이교수</td>
                <td>화/목 13:00-14:30 / 공학관 201</td>
                <td>50/50</td>
                <td>
                  <Button
                    text="마감"
                    size="s"
                    colorVariant="monochrome-light"
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>CS202</td>
                <td>알고리즘</td>
                <td>전공필수</td>
                <td>3</td>
                <td>박교수</td>
                <td>월/수 13:00-14:30 / 공학관 301</td>
                <td>42/50</td>
                <td>
                  <Button text="신청" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>CS301</td>
                <td>운영체제</td>
                <td>전공선택</td>
                <td>3</td>
                <td>최교수</td>
                <td>화/목 10:00-11:30 / 공학관 401</td>
                <td>38/45</td>
                <td>
                  <Button text="신청" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>CS302</td>
                <td>데이터베이스</td>
                <td>전공선택</td>
                <td>3</td>
                <td>정교수</td>
                <td>월/수 15:00-16:30 / 공학관 501</td>
                <td>40/45</td>
                <td>
                  <Button text="신청" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>CS303</td>
                <td>컴퓨터 네트워크</td>
                <td>전공선택</td>
                <td>3</td>
                <td>강교수</td>
                <td>화/목 15:00-16:30 / 공학관 601</td>
                <td>35/40</td>
                <td>
                  <Button text="신청" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>CS401</td>
                <td>소프트웨어 공학</td>
                <td>전공선택</td>
                <td>3</td>
                <td>윤교수</td>
                <td>월/수 16:30-18:00 / 공학관 701</td>
                <td>30/35</td>
                <td>
                  <Button text="신청" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>CS402</td>
                <td>인공지능</td>
                <td>전공선택</td>
                <td>3</td>
                <td>임교수</td>
                <td>화/목 16:30-18:00 / 공학관 801</td>
                <td>45/45</td>
                <td>
                  <Button
                    text="마감"
                    size="s"
                    colorVariant="monochrome-light"
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>GE101</td>
                <td>글쓰기와 말하기</td>
                <td>교양필수</td>
                <td>2</td>
                <td>한교수</td>
                <td>월 14:00-16:00 / 인문관 101</td>
                <td>28/30</td>
                <td>
                  <Button text="신청" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>GE102</td>
                <td>영어회화</td>
                <td>교양필수</td>
                <td>2</td>
                <td>Smith</td>
                <td>수 14:00-16:00 / 인문관 201</td>
                <td>25/25</td>
                <td>
                  <Button
                    text="마감"
                    size="s"
                    colorVariant="monochrome-light"
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="my-cart">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          관심 과목 (장바구니)
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>과목코드</th>
                <th>과목명</th>
                <th>학점</th>
                <th>담당교수</th>
                <th>시간/강의실</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CS101</td>
                <td>컴퓨터 개론</td>
                <td>3</td>
                <td>김교수</td>
                <td>월/수 10:00-11:30 / 공학관 101</td>
                <td>
                  <Button text="삭제" size="s" colorVariant="red" />
                </td>
              </tr>
              <tr>
                <td>CS202</td>
                <td>알고리즘</td>
                <td>3</td>
                <td>박교수</td>
                <td>월/수 13:00-14:30 / 공학관 301</td>
                <td>
                  <Button text="삭제" size="s" colorVariant="red" />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
        <Box marginTop={16} padding={16} backgroundColor="bg-white-normal">
          <Text typo="14" style={{ display: "block" }}>총 학점: 6학점</Text>
        </Box>
      </Section>

      <Section id="my-courses">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          신청 완료 과목
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
                <th>시간/강의실</th>
                <th>취소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={7}
                  style={{ textAlign: "center", padding: "40px" }}
                >
                  <Text typo="14" color="txt-black-darker" style={{ display: "block" }}>
                    신청한 과목이 없습니다
                  </Text>
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="confirm">
        <Text typo="22" bold style={{ marginBottom: "16px", display: "block" }}>
          수강신청 확정
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <Text
            typo="14"
            color="txt-black-darker"
            style={{ marginBottom: "16px", display: "block" }}
          >
            장바구니의 과목들을 한 번에 신청하시겠습니까?
            <br />
            신청 후에도 수강정정 기간에 변경이 가능합니다.
          </Text>
          <ButtonGroup style={{ display: "flex", gap: "12px" }}>
            <Button text="장바구니 비우기" size="l" colorVariant="red" />
            <Button text="일괄 신청" size="l" colorVariant="blue" />
          </ButtonGroup>
        </Box>
      </Section>
    </PageContainer>
  );
}
