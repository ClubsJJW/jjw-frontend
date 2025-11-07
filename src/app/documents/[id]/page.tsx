"use client";

import { useState } from "react";
import { mockDocuments } from "@/data/mockDocuments";
import Link from "next/link";
import styled from "styled-components";
import { useParams } from "next/navigation";

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
`;

const BackLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 20px;
  font-size: 11px;
  color: #666;
  margin-top: 10px;
`;

const TabContainer = styled.div`
  background: white;
  border: 1px solid #ddd;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  overflow-x: auto;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 12px 20px;
  font-size: 11px;
  border: none;
  background: ${(props) => (props.active ? "white" : "#f5f5f5")};
  border-bottom: ${(props) =>
    props.active ? "2px solid #007bff" : "2px solid transparent"};
  cursor: pointer;
  color: ${(props) => (props.active ? "#007bff" : "#666")};
  white-space: nowrap;

  &:hover {
    background: ${(props) => (props.active ? "white" : "#e8e8e8")};
  }
`;

const TabContent = styled.div`
  padding: 20px;
  font-size: 12px;
  line-height: 1.6;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 13px;
  color: #555;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 11px;
`;

const Label = styled.span`
  width: 180px;
  color: #888;
  flex-shrink: 0;
`;

const Value = styled.span`
  color: #333;
  flex: 1;
`;

const SmallButton = styled.button`
  padding: 6px 12px;
  font-size: 10px;
  background: #e0e0e0;
  border: 1px solid #ccc;
  cursor: pointer;
  color: #666;
  margin-right: 8px;
  margin-bottom: 8px;

  &:hover {
    background: #d0d0d0;
  }
`;

const HiddenPanel = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  font-size: 11px;
`;

const WarningBox = styled.div`
  background: #fff3cd;
  border: 1px solid #ffc107;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 10px;
  color: #856404;
`;

const AttachmentItem = styled.div`
  padding: 8px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  margin-bottom: 8px;
  font-size: 11px;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 11px;
  color: #666;
  cursor: pointer;

  input {
    margin-right: 8px;
  }
`;

export default function DocumentDetailPage() {
  const params = useParams();
  const documentId = params.id as string;
  const document = mockDocuments.find((doc) => doc.id === documentId);

  const [activeTab, setActiveTab] = useState("overview");
  const [reviewModeEnabled, setReviewModeEnabled] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [complianceCheck, setComplianceCheck] = useState(false);
  const [budgetCheck, setBudgetCheck] = useState(false);
  const [legalCheck, setLegalCheck] = useState(false);
  const [reviewerQualification, setReviewerQualification] = useState(false);

  if (!document) {
    return (
      <PageContainer>
        <Header>
          <BackLink href="/documents">← 문서 목록으로 돌아가기</BackLink>
          <Title>문서를 찾을 수 없습니다</Title>
        </Header>
      </PageContainer>
    );
  }

  const tabs = [
    { id: "overview", label: "일반 정보" },
    { id: "description", label: "상세 설명" },
    { id: "attachments", label: "지원 문서" },
    { id: "history", label: "처리 이력" },
    { id: "metadata", label: "시스템 메타데이터" },
    { id: "compliance", label: "규정 준수 요구사항" },
    { id: "related", label: "관련 문서" },
    { id: "admin", label: "관리 기능" },
  ];

  return (
    <PageContainer>
      <Header>
        <BackLink href="/documents">
          ← 문서 처리 목록으로 돌아가기
        </BackLink>
        <Title>{document.title}</Title>
        <MetaInfo>
          <span>문서 ID: {document.id}</span>
          <span>상태: {document.status === "pending_review" ? "초기 평가 대기 중" :
                        document.status === "in_review" ? "평가 프로세스 진행 중" :
                        document.status === "approved" ? "처리 완료 - 승인됨" :
                        document.status === "rejected" ? "처리 완료 - 미승인" :
                        document.status.replace(/_/g, " ").toUpperCase()}</span>
          <span>제출일: {new Date(document.submittedAt).toLocaleDateString('ko-KR')}</span>
        </MetaInfo>
      </Header>

      {!reviewModeEnabled && (
        <WarningBox>
          중요: 검토 모드가 현재 비활성화되어 있습니다. 본 문서에 대한 평가 작업을 수행하려면
          먼저 검토 모드를 활성화해야 합니다. 검토 모드를 활성화하는 옵션은 문서 인터페이스에서
          찾을 수 있습니다. 적절한 권한이 있는 사용자만 이 모드를 활성화할 수 있습니다.
        </WarningBox>
      )}

      <TabContainer>
        <TabList>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <TabContent>
          {activeTab === "overview" && (
            <>
              <Section>
                <SectionTitle>기본 문서 정보</SectionTitle>
                <InfoRow>
                  <Label>문서 유형:</Label>
                  <Value>
                    {document.type === "purchase_request" ? "구매 요청" :
                     document.type === "expense_report" ? "경비 정산" :
                     document.type === "contract" ? "계약서" :
                     document.type === "invoice" ? "청구서" :
                     document.type === "project_proposal" ? "프로젝트 제안" :
                     document.type.replace(/_/g, " ").toUpperCase()}
                  </Value>
                </InfoRow>
                <InfoRow>
                  <Label>현재 처리 상태:</Label>
                  <Value>
                    {document.status === "pending_review" ? "초기 평가 대기 중" :
                     document.status === "in_review" ? "평가 프로세스 진행 중" :
                     document.status === "approved" ? "처리 완료 - 승인됨" :
                     document.status === "rejected" ? "처리 완료 - 미승인" :
                     document.status.replace(/_/g, " ").toUpperCase()}
                  </Value>
                </InfoRow>
                <InfoRow>
                  <Label>제출 당사자:</Label>
                  <Value>{document.submittedBy}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>제출 타임스탬프:</Label>
                  <Value>{new Date(document.submittedAt).toLocaleString('ko-KR')}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>원 소속 부서:</Label>
                  <Value>{document.department}</Value>
                </InfoRow>
                {document.amount && (
                  <InfoRow>
                    <Label>금융 금액:</Label>
                    <Value>
                      {document.amount.toLocaleString()} {document.currency}
                    </Value>
                  </InfoRow>
                )}
                <InfoRow>
                  <Label>우선순위 분류:</Label>
                  <Value>
                    {document.priority === "low" ? "낮음" :
                     document.priority === "medium" ? "보통" :
                     document.priority === "high" ? "높음" :
                     document.priority === "urgent" ? "긴급" :
                     document.priority.toUpperCase()}
                  </Value>
                </InfoRow>
              </Section>

              <Section>
                <SectionTitle>처리 요구사항</SectionTitle>
                <InfoRow>
                  <Label>검토 필요 여부:</Label>
                  <Value>{document.reviewRequired ? "예" : "아니오"}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>규정 준수 확인 필요:</Label>
                  <Value>{document.complianceCheck ? "예" : "아니오"}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>예산 승인 필요:</Label>
                  <Value>{document.budgetApprovalNeeded ? "예" : "아니오"}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>법률 검토 필요:</Label>
                  <Value>{document.legalReviewRequired ? "예" : "아니오"}</Value>
                </InfoRow>
              </Section>

              <Section>
                <SectionTitle>빠른 작업</SectionTitle>
                <SmallButton>문서 요약 인쇄</SmallButton>
                <SmallButton>PDF로 내보내기</SmallButton>
                <SmallButton>문서 링크 공유</SmallButton>
                <SmallButton>즐겨찾기에 추가</SmallButton>
                <SmallButton>알림 설정</SmallButton>
                <SmallButton
                  onClick={() => setReviewModeEnabled(!reviewModeEnabled)}
                  style={{
                    background: reviewModeEnabled ? "#d4edda" : "#e0e0e0",
                  }}
                >
                  {reviewModeEnabled ? "검토 모드: 활성화됨" : "검토 모드 활성화"}
                </SmallButton>
              </Section>
            </>
          )}

          {activeTab === "description" && (
            <>
              <Section>
                <SectionTitle>종합 문서 설명</SectionTitle>
                <p style={{ lineHeight: "1.8", color: "#555" }}>
                  {document.description}
                </p>
              </Section>

              <Section>
                <SectionTitle>추가 컨텍스트</SectionTitle>
                <p style={{ color: "#888", fontSize: "11px" }}>
                  본 섹션은 문서 제출과 관련된 추가 컨텍스트 및 배경 정보를 제공합니다.
                  자세한 내용은 &quot;지원 문서&quot; 탭의 지원 문서를 참조하시기 바랍니다.
                </p>
              </Section>

              <Section>
                <SectionTitle>제출자 메모</SectionTitle>
                <p style={{ color: "#888", fontSize: "11px" }}>
                  현재 제출자가 제공한 추가 메모가 없습니다.
                </p>
              </Section>
            </>
          )}

          {activeTab === "attachments" && (
            <>
              <Section>
                <SectionTitle>
                  첨부된 지원 문서 ({document.attachments.length}개 파일)
                </SectionTitle>
                {document.attachments.map((attachment) => (
                  <AttachmentItem key={attachment.id}>
                    <div
                      style={{
                        fontWeight: "600",
                        marginBottom: "4px",
                        fontSize: "11px",
                      }}
                    >
                      {attachment.name}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#888",
                        marginBottom: "6px",
                      }}
                    >
                      크기: {(attachment.size / 1024 / 1024).toFixed(2)} MB |
                      업로드됨: {new Date(attachment.uploadedAt).toLocaleString('ko-KR')}
                    </div>
                    <SmallButton>문서 보기</SmallButton>
                    <SmallButton>다운로드</SmallButton>
                    <SmallButton>메타데이터 보기</SmallButton>
                  </AttachmentItem>
                ))}
              </Section>
            </>
          )}

          {activeTab === "history" && (
            <>
              <Section>
                <SectionTitle>문서 처리 타임라인</SectionTitle>
                {document.approvalHistory.length > 0 ? (
                  document.approvalHistory.map((history) => (
                    <div
                      key={history.id}
                      style={{
                        marginBottom: "15px",
                        padding: "10px",
                        background: "#f9f9f9",
                        border: "1px solid #e0e0e0",
                      }}
                    >
                      <div style={{ fontWeight: "600", marginBottom: "5px" }}>
                        {history.reviewerName} - {history.action === "approved" ? "승인됨" :
                                                   history.action === "rejected" ? "반려됨" :
                                                   history.action === "requested_changes" ? "변경 요청됨" :
                                                   history.action.toUpperCase()}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#888",
                          marginBottom: "5px",
                        }}
                      >
                        {new Date(history.timestamp).toLocaleString('ko-KR')}
                      </div>
                      <div style={{ fontSize: "11px" }}>{history.comment}</div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "#888" }}>
                    이 문서에 대한 처리 이력이 아직 없습니다.
                  </p>
                )}
              </Section>
            </>
          )}

          {activeTab === "metadata" && (
            <>
              <Section>
                <SectionTitle>시스템 생성 메타데이터</SectionTitle>
                <InfoRow>
                  <Label>데이터베이스 레코드 ID:</Label>
                  <Value>{document.id}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>생성 타임스탬프:</Label>
                  <Value>{new Date(document.submittedAt).toISOString()}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>마지막 수정:</Label>
                  <Value>{new Date().toISOString()}</Value>
                </InfoRow>
                <InfoRow>
                  <Label>문서 버전:</Label>
                  <Value>1.0</Value>
                </InfoRow>
                <InfoRow>
                  <Label>시스템 상태 코드:</Label>
                  <Value>ACTIVE_PROCESSING</Value>
                </InfoRow>
                <InfoRow>
                  <Label>워크플로우 인스턴스 ID:</Label>
                  <Value>WF-{Math.random().toString(36).substr(2, 9)}</Value>
                </InfoRow>
              </Section>
            </>
          )}

          {activeTab === "compliance" && (
            <>
              <Section>
                <SectionTitle>규제 준수 정보</SectionTitle>
                <p style={{ color: "#888", marginBottom: "15px" }}>
                  본 문서는 조직 정책 및 해당 규제 요구사항을 준수해야 합니다.
                  승인 작업을 진행하기 전에 모든 규정 준수 체크포인트를 검토하시기 바랍니다.
                </p>

                <Checkbox>
                  <input
                    type="checkbox"
                    checked={complianceCheck}
                    onChange={(e) => setComplianceCheck(e.target.checked)}
                  />
                  내부 정책 준수 여부를 확인했습니다
                </Checkbox>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={budgetCheck}
                    onChange={(e) => setBudgetCheck(e.target.checked)}
                  />
                  이 요청에 대한 예산 가용성을 확인했습니다
                </Checkbox>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={legalCheck}
                    onChange={(e) => setLegalCheck(e.target.checked)}
                  />
                  법적 영향을 검토했습니다 (해당하는 경우)
                </Checkbox>
              </Section>

              <Section>
                <SectionTitle>규정 준수 문서</SectionTitle>
                <SmallButton>규정 준수 보고서 생성</SmallButton>
                <SmallButton>정책 문서 보기</SmallButton>
                <SmallButton>규제 업데이트 확인</SmallButton>
              </Section>
            </>
          )}

          {activeTab === "related" && (
            <>
              <Section>
                <SectionTitle>관련 문서 참조</SectionTitle>
                <p style={{ color: "#888" }}>
                  현재 시스템에서 관련 문서를 찾을 수 없습니다.
                </p>
              </Section>
            </>
          )}

          {activeTab === "admin" && (
            <>
              <Section>
                <SectionTitle>관리 제어 패널</SectionTitle>
                <p
                  style={{
                    color: "#888",
                    marginBottom: "15px",
                    fontSize: "11px",
                  }}
                >
                  본 섹션에는 문서 처리를 위한 고급 관리 기능이 포함되어 있습니다.
                  적절한 권한을 가진 사용자만 이러한 기능에 액세스해야 합니다.
                </p>

                <SmallButton onClick={() => setShowAdminPanel(!showAdminPanel)}>
                  {showAdminPanel ? "숨기기" : "표시"} 고급 옵션
                </SmallButton>
                <SmallButton>문서 재할당</SmallButton>
                <SmallButton>우선순위 변경</SmallButton>
                <SmallButton>내부 메모 추가</SmallButton>
                <SmallButton>감사 로그 보기</SmallButton>
              </Section>

              {showAdminPanel && (
                <HiddenPanel>
                  <SectionTitle>고급 처리 옵션</SectionTitle>
                  <p style={{ marginBottom: "15px", color: "#666" }}>
                    최종 처리 작업을 진행하기 전에 규정 준수 요구사항 탭에서
                    모든 필수 확인 사항이 완료되었는지 확인하세요.
                  </p>

                  <Checkbox>
                    <input
                      type="checkbox"
                      checked={reviewerQualification}
                      onChange={(e) =>
                        setReviewerQualification(e.target.checked)
                      }
                    />
                    본인은 이 문서 유형을 검토할 수 있는 필요한 자격을 보유하고 있음을 확인합니다
                  </Checkbox>

                  <SmallButton
                    onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                    style={{ marginTop: "10px" }}
                  >
                    {showAdvancedOptions ? "숨기기" : "표시"} 최종 처리 작업
                  </SmallButton>

                  {showAdvancedOptions && (
                    <div
                      style={{
                        marginTop: "15px",
                        padding: "15px",
                        background: "#f0f0f0",
                        border: "1px solid #d0d0d0",
                      }}
                    >
                      <SectionTitle>문서 처리 최종화</SectionTitle>
                      {!reviewModeEnabled && (
                        <WarningBox>
                          처리 작업을 실행하기 전에 검토 모드를 활성화해야 합니다.
                        </WarningBox>
                      )}
                      {reviewModeEnabled &&
                        (!complianceCheck ||
                          !budgetCheck ||
                          !reviewerQualification) && (
                          <WarningBox>
                            진행하기 전에 모든 필수 규정 준수 확인 및 승인을 완료하세요.
                          </WarningBox>
                        )}

                      <Link href={`/documents/${document.id}/review`}>
                        <SmallButton
                          style={{
                            background:
                              reviewModeEnabled &&
                              complianceCheck &&
                              budgetCheck &&
                              reviewerQualification
                                ? "#007bff"
                                : "#ccc",
                            color:
                              reviewModeEnabled &&
                              complianceCheck &&
                              budgetCheck &&
                              reviewerQualification
                                ? "white"
                                : "#888",
                            cursor:
                              reviewModeEnabled &&
                              complianceCheck &&
                              budgetCheck &&
                              reviewerQualification
                                ? "pointer"
                                : "not-allowed",
                          }}
                          disabled={
                            !reviewModeEnabled ||
                            !complianceCheck ||
                            !budgetCheck ||
                            !reviewerQualification
                          }
                        >
                          최종 평가로 진행
                        </SmallButton>
                      </Link>
                    </div>
                  )}
                </HiddenPanel>
              )}
            </>
          )}
        </TabContent>
      </TabContainer>
    </PageContainer>
  );
}
