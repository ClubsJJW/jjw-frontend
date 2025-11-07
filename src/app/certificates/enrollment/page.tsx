"use client";

import styled from "styled-components";
import { Text, Button, Box, TextField, Select } from "@channel.io/bezier-react";

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

const FormRow = styled.div`
  margin-bottom: 20px;
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

const PreviewBox = styled.div`
  padding: 40px;
  background: white;
  border-radius: 8px;
  border: 2px solid #e9ecef;
  margin-top: 16px;
  min-height: 400px;
`;

const FlexBox = styled.div<{
  $gap?: number;
}>`
  display: flex;
  gap: ${(props) => props.$gap || 0}px;
`;

export default function EnrollmentCertificatePage() {
  return (
    <PageContainer>
      <PageHeader>
        <Text typo="30" bold>
          재학 증명서 발급
        </Text>
        <Text typo="16" color="txt-black-darker" style={{ marginTop: "8px" }}>
          재학 증명서를 온라인으로 발급받을 수 있습니다
        </Text>
      </PageHeader>

      <Section id="fee-info">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          📋 발급 안내
        </Text>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            발급 수수료
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 국문: 1,000원
            <br />
            - 영문: 2,000원
            <br />- 온라인 발급: 수수료 무료
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            발급 소요 시간
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 온라인 발급: 즉시
            <br />- 방문 발급: 30분 ~ 1시간
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            유의사항
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 온라인 발급 증명서는 전자 서명이 포함됩니다
            <br />
            - 제출처에서 원본 제출을 요구하는 경우 방문 발급을 이용하세요
            <br />- 휴학생도 재학 증명서 발급이 가능합니다
          </Text>
        </InfoBox>
      </Section>

      <Section id="certificate-types">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          증명서 종류
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>증명서명</th>
                <th>용도</th>
                <th>수수료</th>
                <th>발급</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>재학증명서 (국문)</td>
                <td>일반 제출용</td>
                <td>무료</td>
                <td>
                  <Button text="발급" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>재학증명서 (영문)</td>
                <td>해외 제출용</td>
                <td>무료</td>
                <td>
                  <Button text="발급" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>휴학증명서</td>
                <td>휴학 사실 증명</td>
                <td>무료</td>
                <td>
                  <Button text="발급" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>예상졸업증명서</td>
                <td>졸업 예정 증명</td>
                <td>무료</td>
                <td>
                  <Button text="발급" size="s" colorVariant="blue" />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="application-form">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          발급 신청서
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              증명서 종류 *
            </Text>
            <Select placeholder="재학증명서 (국문)을 선택하세요" />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              언어 *
            </Text>
            <FlexBox $gap={16}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input type="radio" name="language" defaultChecked />
                <Text typo="14">국문</Text>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input type="radio" name="language" />
                <Text typo="14">영문</Text>
              </label>
            </FlexBox>
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
              발급 매수 *
            </Text>
            <TextField placeholder="1" type="number" />
            <Text
              typo="12"
              color="txt-black-darker"
              style={{ marginTop: "4px" }}
            >
              최대 10매까지 발급 가능
            </Text>
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              용도 *
            </Text>
            <Select placeholder="제출 용도를 선택하세요" />
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              제출처 *
            </Text>
            <TextField placeholder="증명서를 제출할 기관명을 입력하세요" />
          </FormRow>
        </Box>
      </Section>

      <Section id="delivery">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          수령 방법
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <FormRow>
            <Box>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input type="radio" name="delivery" defaultChecked />
                <Text typo="14">온라인 발급 (PDF 다운로드)</Text>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input type="radio" name="delivery" />
                <Text typo="14">방문 수령 (학생지원팀)</Text>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input type="radio" name="delivery" />
                <Text typo="14">우편 수령 (등기우편)</Text>
              </label>
            </Box>
          </FormRow>

          <FormRow>
            <Text typo="14" bold style={{ marginBottom: "8px" }}>
              우편 수령 주소
            </Text>
            <TextField
              placeholder="우편 수령을 선택한 경우 주소를 입력하세요"
              style={{ marginBottom: "8px" }}
            />
            <Text typo="12" color="txt-black-darker">
              우편 수령 시 추가 비용 3,000원이 발생합니다
            </Text>
          </FormRow>
        </Box>
      </Section>

      <Section id="preview">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          미리보기
        </Text>
        <PreviewBox>
          <Box marginBottom={40}>
            <Text typo="30" bold>
              재 학 증 명 서
            </Text>
          </Box>
          <Box marginBottom={24}>
            <Text typo="16">학번: 20230001</Text>
          </Box>
          <Box marginBottom={24}>
            <Text typo="16">성명: John Doe</Text>
          </Box>
          <Box marginBottom={24}>
            <Text typo="16">생년월일: 2003년 3월 15일</Text>
          </Box>
          <Box marginBottom={24}>
            <Text typo="16">학과: 컴퓨터공학과</Text>
          </Box>
          <Box marginBottom={24}>
            <Text typo="16">학년: 2학년</Text>
          </Box>
          <Box marginBottom={40}>
            <Text typo="16">재학기간: 2023년 3월 2일 ~ 현재</Text>
          </Box>
          <Box marginBottom={24}>
            <Text typo="14">위 사람은 본교에 재학중임을 증명합니다.</Text>
          </Box>
          <Box marginTop={60}>
            <Text typo="16">2024년 2월 15일</Text>
            <Box marginTop={32}>
              <Text typo="22" bold>
                한국대학교 총장 [직인]
              </Text>
            </Box>
          </Box>
        </PreviewBox>
      </Section>

      <Section id="payment">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          결제 정보
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <Box marginBottom={16}>
            <Text typo="16">발급 수수료: 0원</Text>
            <Text typo="16">배송비: 0원</Text>
            <Box
              marginTop={8}
              paddingTop={8}
              style={{ borderTop: "1px solid #e9ecef" }}
            >
              <Text typo="18" bold>
                총 결제 금액: 0원
              </Text>
            </Box>
          </Box>
        </Box>
      </Section>

      <Section id="history">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          최근 발급 내역
        </Text>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>발급일시</th>
                <th>증명서 종류</th>
                <th>발급 매수</th>
                <th>수령 방법</th>
                <th>상태</th>
                <th>재발급</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.02.10 14:30</td>
                <td>재학증명서 (국문)</td>
                <td>1매</td>
                <td>온라인</td>
                <td>완료</td>
                <td>
                  <Button text="다운로드" size="s" colorVariant="blue" />
                </td>
              </tr>
              <tr>
                <td>2024.01.15 10:20</td>
                <td>재학증명서 (영문)</td>
                <td>2매</td>
                <td>방문 수령</td>
                <td>완료</td>
                <td>
                  <Button
                    text="재발급"
                    size="s"
                    colorVariant="monochrome-dark"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section id="submit">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          발급 신청
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <Text
            typo="14"
            color="txt-black-darker"
            style={{ marginBottom: "16px" }}
          >
            입력한 정보를 확인하고 발급 신청을 완료하세요.
          </Text>
          <FlexBox $gap={12}>
            <Button text="취소" size="l" colorVariant="monochrome-light" />
            <Button text="임시 저장" size="l" colorVariant="monochrome-dark" />
            <Button text="발급 신청" size="l" colorVariant="blue" />
          </FlexBox>
        </Box>
      </Section>
    </PageContainer>
  );
}
