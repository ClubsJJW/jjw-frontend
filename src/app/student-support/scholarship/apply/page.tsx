"use client";

import styled from "styled-components";
import {
  Text,
  Button,
  Box,
  TextField,
  Select,
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

const FormRow = styled.div`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
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
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
  }
`;

export default function ScholarshipApplyPage() {
  return (
    <PageContainer>
      <PageHeader>
        <Text typo="30" bold>
          장학금 신청
        </Text>
        <Text typo="16" color="txt-black-darker" style={{ marginTop: "8px" }}>
          2024학년도 1학기 장학금 신청 페이지입니다
        </Text>
      </PageHeader>

      <Section id="notice">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          📢 신청 전 필독사항
        </Text>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            1. 신청 기간
          </Text>
          <Text typo="14" color="txt-black-darker">
            2024년 2월 1일 ~ 2월 28일 23:59까지
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            2. 제출 서류
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 가족관계증명서 1부
            <br />
            - 소득증명원 1부
            <br />
            - 성적증명서 (자동 조회)
            <br />- 기타 증빙서류 (해당자에 한함)
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            3. 유의사항
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 이중 수혜 불가: 국가장학금과 교내장학금 중 1개만 선택 가능
            <br />
            - 성적 기준: 직전 학기 평점 3.0 이상
            <br />
            - 소득 기준: 소득분위 8분위 이하
            <br />- 허위 서류 제출 시 장학금 환수 및 징계 처분
          </Text>
        </InfoBox>
      </Section>

      <Section id="scholarship-types">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          장학금 종류
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>장학금명</th>
                <th>지급 금액</th>
                <th>선발 기준</th>
                <th>신청 가능 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>우수 장학금</td>
                <td>전액</td>
                <td>성적 4.0 이상</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>성적 우수 장학금</td>
                <td>50%</td>
                <td>성적 3.5 이상</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>저소득층 장학금</td>
                <td>전액</td>
                <td>소득분위 3분위 이하</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>다자녀 장학금</td>
                <td>30%</td>
                <td>3자녀 이상 가정</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>근로 장학금</td>
                <td>200만원</td>
                <td>근로 활동 참여</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>봉사 장학금</td>
                <td>100만원</td>
                <td>봉사 활동 120시간 이상</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>해외연수 장학금</td>
                <td>500만원</td>
                <td>어학성적 우수자</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>창업 장학금</td>
                <td>300만원</td>
                <td>창업 동아리 활동</td>
                <td>
                  <Button text="신청하기" size="s" colorVariant="blue" />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="application-form">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          신청서 작성
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              신청 장학금 선택 *
            </Text>
            <Select placeholder="장학금을 선택하세요" />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              학번
            </Text>
            <TextField value="20230001" disabled />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              이름
            </Text>
            <TextField value="John Doe" disabled />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              학과
            </Text>
            <TextField value="컴퓨터공학과" disabled />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              학년
            </Text>
            <TextField value="2학년" disabled />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              연락처 *
            </Text>
            <TextField placeholder="010-0000-0000" />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              이메일 *
            </Text>
            <TextField placeholder="example@email.com" />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              신청 사유 *
            </Text>
            <textarea
              style={{
                width: "100%",
                minHeight: "150px",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
                fontSize: "14px",
                fontFamily: "inherit",
              }}
              placeholder="장학금 신청 사유를 자세히 작성해주세요 (최소 100자 이상)"
            />
          </FormRow>

          <FormRow>
            <Checkbox>개인정보 수집 및 이용에 동의합니다</Checkbox>
          </FormRow>

          <FormRow>
            <Checkbox>장학금 신청 내역이 사실임을 확인합니다</Checkbox>
          </FormRow>
        </Box>
      </Section>

      <Section id="document-upload">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          서류 제출
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              가족관계증명서 *
            </Text>
            <input type="file" />
            <Text
              typo="12"
              color="txt-black-darker"
              style={{ marginTop: "4px" }}
            >
              PDF, JPG, PNG 파일만 업로드 가능 (최대 10MB)
            </Text>
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              소득증명원 *
            </Text>
            <input type="file" />
            <Text
              typo="12"
              color="txt-black-darker"
              style={{ marginTop: "4px" }}
            >
              PDF, JPG, PNG 파일만 업로드 가능 (최대 10MB)
            </Text>
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              기타 증빙서류
            </Text>
            <input type="file" multiple />
            <Text
              typo="12"
              color="txt-black-darker"
              style={{ marginTop: "4px" }}
            >
              여러 파일 선택 가능 (각 파일 최대 10MB)
            </Text>
          </FormRow>
        </Box>
      </Section>

      <Section id="submit">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          신청 완료
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <Text
            typo="14"
            color="txt-black-darker"
            style={{ marginBottom: "16px" }}
          >
            모든 정보를 확인하셨나요? 제출 후에는 수정이 불가능합니다.
          </Text>
          <ButtonGroup>
            <Button text="임시 저장" size="l" colorVariant="monochrome-dark" />
            <Button text="신청 취소" size="l" colorVariant="monochrome-light" />
            <Button text="제출하기" size="l" colorVariant="blue" />
          </ButtonGroup>
        </Box>
      </Section>

      <Section id="faq">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          자주 묻는 질문
        </Text>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            Q. 장학금을 여러 개 동시에 신청할 수 있나요?
          </Text>
          <Text typo="14" color="txt-black-darker">
            A. 네, 여러 장학금에 동시 신청이 가능합니다. 단, 최종 선발 시 1개만
            수혜 가능합니다.
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            Q. 서류를 나중에 제출할 수 있나요?
          </Text>
          <Text typo="14" color="txt-black-darker">
            A. 임시 저장 후 기한 내에 서류를 제출하시면 됩니다.
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            Q. 선발 결과는 언제 확인할 수 있나요?
          </Text>
          <Text typo="14" color="txt-black-darker">
            A. 신청 마감 후 2주 이내에 개별 문자 및 이메일로 통보됩니다.
          </Text>
        </InfoBox>
      </Section>
    </PageContainer>
  );
}
