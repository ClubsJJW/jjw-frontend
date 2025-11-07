"use client";

import { useState } from "react";
import { mockDocuments } from "@/data/mockDocuments";
import Link from "next/link";
import styled from "styled-components";
import { useParams, useRouter } from "next/navigation";

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

const Section = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const Subsection = styled.div`
  margin-bottom: 25px;
`;

const SubsectionTitle = styled.h4`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 11px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  font-size: 11px;
  color: #666;
  cursor: pointer;
  line-height: 1.5;

  input {
    margin-right: 8px;
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 11px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 11px;
  border: 1px solid #ccc;
  min-height: 100px;
  font-family: inherit;
  resize: vertical;
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

  &:disabled {
    background: #f5f5f5;
    color: #ccc;
    cursor: not-allowed;
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
  padding: 12px;
  margin-bottom: 15px;
  font-size: 11px;
  color: #856404;
  line-height: 1.5;
`;

const InfoBox = styled.div`
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 11px;
  color: #0c5460;
  line-height: 1.5;
`;

const Accordion = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  border: none;
  text-align: left;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #e8e8e8;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 15px;
  background: white;
  border-top: 1px solid #ddd;
`;

export default function ReviewPage() {
  const params = useParams();
  const router = useRouter();
  const documentId = params.id as string;
  const document = mockDocuments.find((doc) => doc.id === documentId);

  const [step1Complete, setStep1Complete] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);
  const [step3Complete, setStep3Complete] = useState(false);
  const [step4Complete, setStep4Complete] = useState(false);

  const [verificationCode, setVerificationCode] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviewComments, setReviewComments] = useState("");

  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);
  const [accordion4Open, setAccordion4Open] = useState(false);
  const [accordion5Open, setAccordion5Open] = useState(false);

  const [showFinalOptions, setShowFinalOptions] = useState(false);
  const [showExecutionPanel, setShowExecutionPanel] = useState(false);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);

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

  const allStepsComplete =
    step1Complete && step2Complete && step3Complete && step4Complete;
  const allChecksComplete =
    check1 && check2 && check3 && check4 && check5 && check6 && check7;

  const handleApprove = () => {
    alert("문서가 승인되었습니다! (실제로는 서버에 요청을 보냅니다)");
    router.push("/documents");
  };

  const handleReject = () => {
    if (!reviewComments.trim()) {
      alert("반려 사유를 입력해주세요.");
      return;
    }
    alert("문서가 반려되었습니다! (실제로는 서버에 요청을 보냅니다)");
    router.push("/documents");
  };

  return (
    <PageContainer>
      <Header>
        <BackLink href={`/documents/${documentId}`}>
          ← 문서 상세 보기로 돌아가기
        </BackLink>
        <Title>문서 처리 평가 인터페이스</Title>
        <Text style={{ marginTop: "10px", color: "#888" }}>
          문서 ID: {document.id} | {document.title}
        </Text>
      </Header>

      <WarningBox>
        중요 공지사항: 이것은 문서 처리를 위한 최종 평가 인터페이스입니다.
        최종 작업을 진행하기 전에 모든 섹션을 신중하게 검토하고 모든 필수 확인 단계를 완료하시기 바랍니다.
        불완전한 평가는 처리 오류 또는 규정 준수 위반을 초래할 수 있습니다.
      </WarningBox>

      <Section>
        <SectionTitle>1단계: 사전 평가 확인</SectionTitle>
        <Text>
          문서 평가를 진행하기 전에 신원과 자격을 확인해야 합니다.
          다음 정보를 검토하고 이해했음을 확인하시기 바랍니다.
        </Text>

        <Accordion>
          <AccordionHeader onClick={() => setAccordion1Open(!accordion1Open)}>
            <span>평가 가이드라인 및 정책</span>
            <span>{accordion1Open ? "▲" : "▼"}</span>
          </AccordionHeader>
          <AccordionContent isOpen={accordion1Open}>
            <Text>
              모든 문서 평가는 조직의 정책 및 절차에 따라 수행되어야 합니다.
              평가자는 객관성을 유지하고, 모든 지원 문서에 대한 철저한 검토를 수행하며,
              모든 결정에 대해 명확한 정당화를 제공해야 합니다.
              평가 가이드라인을 준수하지 않을 경우 징계 조치를 받을 수 있습니다.
            </Text>
            <Checkbox>
              <input
                type="checkbox"
                checked={check1}
                onChange={(e) => setCheck1(e.target.checked)}
              />
              평가 가이드라인을 읽고 이해했습니다
            </Checkbox>
          </AccordionContent>
        </Accordion>

        <Accordion>
          <AccordionHeader onClick={() => setAccordion2Open(!accordion2Open)}>
            <span>이해관계 충돌 선언</span>
            <span>{accordion2Open ? "▲" : "▼"}</span>
          </AccordionHeader>
          <AccordionContent isOpen={accordion2Open}>
            <Text>
              평가자는 검토 중인 문서와 관련된 잠재적 이해관계 충돌을 선언해야 합니다.
              여기에는 제출 당사자 또는 제안된 조치의 수혜자와의 개인적, 재정적 또는
              직업적 관계가 포함됩니다.
            </Text>
            <Checkbox>
              <input
                type="checkbox"
                checked={check2}
                onChange={(e) => setCheck2(e.target.checked)}
              />
              본인은 이 문서와 관련하여 이해관계 충돌이 없음을 선언합니다
            </Checkbox>
          </AccordionContent>
        </Accordion>

        <Subsection style={{ marginTop: "20px" }}>
          <SubsectionTitle>평가자 정보</SubsectionTitle>
          <label
            style={{ display: "block", fontSize: "11px", marginBottom: "5px" }}
          >
            성명:
          </label>
          <Input
            type="text"
            placeholder="성명을 입력하세요"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          />

          <SmallButton
            onClick={() => {
              if (check1 && check2 && reviewerName.trim()) {
                setStep1Complete(true);
                alert("1단계 확인 완료");
              } else {
                alert("모든 필수 항목과 체크박스를 완료해주세요");
              }
            }}
          >
            1단계 확인 완료
          </SmallButton>
          {step1Complete && (
            <span style={{ marginLeft: "10px", color: "green", fontSize: "11px" }}>
              ✓ 확인됨
            </span>
          )}
        </Subsection>
      </Section>

      <Section>
        <SectionTitle>2단계: 문서 내용 검토</SectionTitle>
        {!step1Complete && (
          <WarningBox>
            2단계로 진행하기 전에 1단계를 완료해야 합니다.
          </WarningBox>
        )}

        <Accordion>
          <AccordionHeader onClick={() => setAccordion3Open(!accordion3Open)}>
            <span>지원 문서 검토</span>
            <span>{accordion3Open ? "▲" : "▼"}</span>
          </AccordionHeader>
          <AccordionContent isOpen={accordion3Open}>
            <Text>
              이 제출물에 첨부된 모든 지원 문서는 완전성, 정확성 및 관련성을 검토해야 합니다.
              모든 필수 첨부 파일이 있고 올바르게 형식화되었는지 확인하세요.
            </Text>
            <Checkbox>
              <input
                type="checkbox"
                checked={check3}
                onChange={(e) => setCheck3(e.target.checked)}
                disabled={!step1Complete}
              />
              첨부된 {document.attachments.length}개의 문서를 모두 검토했습니다
            </Checkbox>
          </AccordionContent>
        </Accordion>

        <Accordion>
          <AccordionHeader onClick={() => setAccordion4Open(!accordion4Open)}>
            <span>재무 및 예산 확인</span>
            <span>{accordion4Open ? "▲" : "▼"}</span>
          </AccordionHeader>
          <AccordionContent isOpen={accordion4Open}>
            <Text>
              재무 거래 또는 예산 할당과 관련된 문서의 경우 요청된 금액이 합리적이고
              적절하게 정당화되며 승인된 예산 한도 내에 있는지 확인하세요.
            </Text>
            <Checkbox>
              <input
                type="checkbox"
                checked={check4}
                onChange={(e) => setCheck4(e.target.checked)}
                disabled={!step1Complete}
              />
              재무 세부 사항 및 예산 할당을 확인했습니다
            </Checkbox>
          </AccordionContent>
        </Accordion>

        <SmallButton
          onClick={() => {
            if (step1Complete && check3 && check4) {
              setStep2Complete(true);
              alert("2단계 검토 완료");
            } else {
              alert("모든 필수 확인 사항을 완료해주세요");
            }
          }}
          disabled={!step1Complete}
        >
          2단계 검토 완료
        </SmallButton>
        {step2Complete && (
          <span style={{ marginLeft: "10px", color: "green", fontSize: "11px" }}>
            ✓ 확인됨
          </span>
        )}
      </Section>

      <Section>
        <SectionTitle>3단계: 규정 준수 및 정책 평가</SectionTitle>
        {!step2Complete && (
          <WarningBox>
            3단계로 진행하기 전에 1단계와 2단계를 완료해야 합니다.
          </WarningBox>
        )}

        <Text>
          문서가 적용 가능한 모든 조직 정책, 규제 요구사항 및 업계 표준을 준수하는지 확인하세요.
        </Text>

        <Checkbox>
          <input
            type="checkbox"
            checked={check5}
            onChange={(e) => setCheck5(e.target.checked)}
            disabled={!step2Complete}
          />
          이 문서는 조직의 데이터 보호 및 개인정보 보호 정책을 준수합니다
        </Checkbox>
        <Checkbox>
          <input
            type="checkbox"
            checked={check6}
            onChange={(e) => setCheck6(e.target.checked)}
            disabled={!step2Complete}
          />
          이 문서는 적용 가능한 규제 요구사항 및 업계 표준을 준수합니다
        </Checkbox>

        <SmallButton
          onClick={() => {
            if (step2Complete && check5 && check6) {
              setStep3Complete(true);
              alert("3단계 평가 완료");
            } else {
              alert("모든 필수 확인 사항을 완료해주세요");
            }
          }}
          disabled={!step2Complete}
        >
          3단계 평가 완료
        </SmallButton>
        {step3Complete && (
          <span style={{ marginLeft: "10px", color: "green", fontSize: "11px" }}>
            ✓ 확인됨
          </span>
        )}
      </Section>

      <Section>
        <SectionTitle>4단계: 최종 평가 요약</SectionTitle>
        {!step3Complete && (
          <WarningBox>
            4단계로 진행하기 전에 1단계, 2단계, 3단계를 완료해야 합니다.
          </WarningBox>
        )}

        <Subsection>
          <SubsectionTitle>평가 의견 및 권장사항</SubsectionTitle>
          <Text>
            이 문서에 대한 전문적인 평가, 권장사항 및 추가 의견을 제공하세요.
            귀하의 의견은 처리 이력에 기록됩니다.
          </Text>
          <Textarea
            placeholder="여기에 평가 의견을 입력하세요..."
            value={reviewComments}
            onChange={(e) => setReviewComments(e.target.value)}
            disabled={!step3Complete}
          />
        </Subsection>

        <Checkbox>
          <input
            type="checkbox"
            checked={check7}
            onChange={(e) => setCheck7(e.target.checked)}
            disabled={!step3Complete}
          />
          본인은 이 문서 및 모든 관련 자료에 대해 철저하고 완전한 평가를 수행했음을 인증합니다
        </Checkbox>

        <SmallButton
          onClick={() => {
            if (step3Complete && check7) {
              setStep4Complete(true);
              alert("4단계 요약 완료");
            } else {
              alert("모든 필수 항목을 완료해주세요");
            }
          }}
          disabled={!step3Complete}
        >
          4단계 요약 완료
        </SmallButton>
        {step4Complete && (
          <span style={{ marginLeft: "10px", color: "green", fontSize: "11px" }}>
            ✓ 확인됨
          </span>
        )}
      </Section>

      {allStepsComplete && (
        <Section>
          <SectionTitle>고급 처리 옵션</SectionTitle>
          <InfoBox>
            모든 예비 평가 단계가 완료되었습니다. 이제 최종 처리 옵션에 액세스할 수 있습니다.
            이러한 작업은 되돌릴 수 없으므로 주의해서 진행하시기 바랍니다.
          </InfoBox>

          <SmallButton onClick={() => setShowFinalOptions(!showFinalOptions)}>
            {showFinalOptions ? "숨기기" : "표시"} 최종 처리 옵션
          </SmallButton>

          {showFinalOptions && (
            <HiddenPanel>
              <SubsectionTitle>보안 확인</SubsectionTitle>
              <Text>
                보안을 위해 확인 코드를 입력하세요. 이 코드는 부서 책임자가 제공했어야 합니다.
                확인 코드가 없는 경우 감독자 또는 IT 서비스 데스크에 문의하시기 바랍니다.
              </Text>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  marginBottom: "5px",
                }}
              >
                확인 코드:
              </label>
              <Input
                type="text"
                placeholder="확인 코드를 입력하세요"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />

              <SmallButton
                onClick={() => {
                  if (verificationCode.trim()) {
                    setShowExecutionPanel(true);
                    alert("확인 코드 승인됨 (데모에서는 모든 코드가 작동합니다)");
                  } else {
                    alert("확인 코드를 입력해주세요");
                  }
                }}
              >
                확인 코드 검증
              </SmallButton>

              {showExecutionPanel && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "15px",
                    background: "#fff",
                    border: "2px solid #007bff",
                  }}
                >
                  <SectionTitle>최종 결정 실행</SectionTitle>
                  <WarningBox>
                    경고: 아래 작업은 최종적이며 취소할 수 없습니다.
                    진행하기 전에 모든 필수 확인 사항을 완료했는지 확인하세요.
                  </WarningBox>

                  <Accordion>
                    <AccordionHeader
                      onClick={() => setAccordion5Open(!accordion5Open)}
                    >
                      <span>처리 작업 실행</span>
                      <span>{accordion5Open ? "▲" : "▼"}</span>
                    </AccordionHeader>
                    <AccordionContent isOpen={accordion5Open}>
                      <Text style={{ marginBottom: "15px" }}>
                        평가를 기반으로 적절한 작업을 선택하세요.
                        작업을 실행하기 전에 모든 필수 항목이 완료되었는지 확인하세요.
                      </Text>

                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <SmallButton
                            onClick={handleApprove}
                            disabled={!allChecksComplete || !reviewComments.trim()}
                            style={{
                              background:
                                allChecksComplete && reviewComments.trim()
                                  ? "#28a745"
                                  : "#ccc",
                              color:
                                allChecksComplete && reviewComments.trim()
                                  ? "white"
                                  : "#888",
                              padding: "10px 20px",
                              fontSize: "12px",
                            }}
                          >
                            승인 처리 실행
                          </SmallButton>
                          <Text style={{ fontSize: "10px", marginTop: "5px" }}>
                            문서를 승인하고 요청된 작업을 진행합니다
                          </Text>
                        </div>

                        <div>
                          <SmallButton
                            onClick={handleReject}
                            disabled={!allChecksComplete || !reviewComments.trim()}
                            style={{
                              background:
                                allChecksComplete && reviewComments.trim()
                                  ? "#dc3545"
                                  : "#ccc",
                              color:
                                allChecksComplete && reviewComments.trim()
                                  ? "white"
                                  : "#888",
                              padding: "10px 20px",
                              fontSize: "12px",
                            }}
                          >
                            반려 처리 실행
                          </SmallButton>
                          <Text style={{ fontSize: "10px", marginTop: "5px" }}>
                            문서를 반려하고 의견과 함께 제출자에게 반환합니다
                          </Text>
                        </div>
                      </div>

                      {(!allChecksComplete || !reviewComments.trim()) && (
                        <WarningBox style={{ marginTop: "15px" }}>
                          작업을 실행할 수 없습니다: 모든 규정 준수 체크박스가 선택되고
                          평가 의견이 제공되었는지 확인하세요.
                        </WarningBox>
                      )}
                    </AccordionContent>
                  </Accordion>
                </div>
              )}
            </HiddenPanel>
          )}
        </Section>
      )}

      <div style={{ marginTop: "20px", fontSize: "10px", color: "#888" }}>
        <Text>
          진행 상황: 1단계 {step1Complete ? "✓" : "○"} | 2단계{" "}
          {step2Complete ? "✓" : "○"} | 3단계 {step3Complete ? "✓" : "○"} |
          4단계 {step4Complete ? "✓" : "○"}
        </Text>
      </div>
    </PageContainer>
  );
}
