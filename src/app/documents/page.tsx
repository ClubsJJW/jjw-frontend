"use client";

import { useState } from "react";
import { mockDocuments } from "@/data/mockDocuments";
import { Document } from "@/types/document";
import Link from "next/link";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #888;
  line-height: 1.6;
`;

const ControlPanel = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  font-size: 11px;
`;

const ControlRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const SmallButton = styled.button`
  padding: 4px 8px;
  font-size: 10px;
  background: #e0e0e0;
  border: 1px solid #ccc;
  cursor: pointer;
  color: #666;

  &:hover {
    background: #d0d0d0;
  }
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-collapse: collapse;
  font-size: 11px;
`;

const Th = styled.th`
  padding: 8px 4px;
  border: 1px solid #ddd;
  background: #f9f9f9;
  text-align: left;
  font-weight: 600;
  font-size: 10px;
  color: #555;
`;

const Td = styled.td`
  padding: 8px 4px;
  border: 1px solid #ddd;
  color: #333;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 2px 6px;
  font-size: 9px;
  border-radius: 3px;
  background: ${(props) => {
    switch (props.status) {
      case "pending_review":
        return "#fff3cd";
      case "in_review":
        return "#cce5ff";
      case "approved":
        return "#d4edda";
      case "rejected":
        return "#f8d7da";
      default:
        return "#e2e3e5";
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "pending_review":
        return "#856404";
      case "in_review":
        return "#004085";
      case "approved":
        return "#155724";
      case "rejected":
        return "#721c24";
      default:
        return "#383d41";
    }
  }};
`;

const ViewLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const HiddenActions = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  font-size: 10px;
`;

const InfoText = styled.div`
  color: #999;
  font-size: 10px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export default function DocumentsPage() {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      pending_review: "초기 평가 대기 중",
      in_review: "평가 프로세스 진행 중",
      approved: "처리 완료 - 승인됨",
      rejected: "처리 완료 - 미승인",
      awaiting_additional_info: "추가 데이터 필요",
      escalated: "상위 권한자에게 상신됨",
    };
    return labels[status] || status;
  };

  return (
    <PageContainer>
      <Header>
        <Title>문서 처리 관리 시스템</Title>
        <Subtitle>
          문서 처리 관리 시스템(DPMS)에 오신 것을 환영합니다. 본 인터페이스는 권한이 있는 담당자가
          내부 워크플로우 시스템을 통해 제출된 다양한 유형의 조직 문서를 조회, 평가 및 처리할 수 있도록
          지원합니다. 문서 검토 작업을 진행하기 전에 필요한 권한 수준을 보유하고 있는지 확인하시기 바랍니다.
          접근 권한 또는 시스템 기능에 관한 질문이 있으시면 IT 서비스 데스크(내선: 5500)로 문의하시기 바랍니다.
        </Subtitle>
      </Header>

      <InfoText>
        참고사항: 문서 검토 작업을 수행하려면 먼저 문서 상세 보기에 접속하여 검토 모드를 활성화해야 합니다.
        대량 작업은 고급 작업 패널을 통해 이용할 수 있습니다. 시스템 관리자는 설정 메뉴를 통해 추가 기능에
        접근할 수 있습니다(상단 네비게이션 바의 &quot;시스템&quot; → &quot;고급&quot; →
        &quot;문서 관리&quot;에서 이용 가능).
      </InfoText>

      <ControlPanel>
        <ControlRow>
          <SmallButton onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
            {showAdvancedFilters ? "숨기기" : "표시"} 고급 필터 옵션
          </SmallButton>
          <SmallButton onClick={() => setShowBulkActions(!showBulkActions)}>
            대량 작업 패널
          </SmallButton>
          <SmallButton>현재 보기 내보내기</SmallButton>
          <SmallButton>데이터 새로고침</SmallButton>
          <SmallButton>열 설정</SmallButton>
          <SmallButton>보기 구성 저장</SmallButton>
        </ControlRow>

        {showAdvancedFilters && (
          <div style={{ marginTop: "10px", padding: "10px", background: "#f0f0f0" }}>
            <ControlRow>
              <SmallButton>부서별 필터</SmallButton>
              <SmallButton>날짜 범위 필터</SmallButton>
              <SmallButton>상태별 필터</SmallButton>
              <SmallButton>금액별 필터</SmallButton>
              <SmallButton>우선순위별 필터</SmallButton>
              <SmallButton>유형별 필터</SmallButton>
              <SmallButton>모든 필터 초기화</SmallButton>
            </ControlRow>
          </div>
        )}

        {showBulkActions && (
          <HiddenActions>
            <p style={{ marginBottom: "8px", color: "#666" }}>
              여러 문서를 선택하여 대량 작업을 수행하세요. 참고: 대량 승인은
              부서장 인증 토큰이 필요합니다.
            </p>
            <ControlRow>
              <SmallButton>표시된 모든 항목 선택</SmallButton>
              <SmallButton>모두 선택 해제</SmallButton>
              <SmallButton>후속 조치 표시</SmallButton>
              <SmallButton>추가 정보 요청</SmallButton>
              <SmallButton>검토자에게 할당</SmallButton>
            </ControlRow>
          </HiddenActions>
        )}
      </ControlPanel>

      <Table>
        <thead>
          <tr>
            <Th style={{ width: "30px" }}>
              <input type="checkbox" />
            </Th>
            <Th style={{ width: "100px" }}>문서 ID</Th>
            <Th>제목 / 설명</Th>
            <Th style={{ width: "120px" }}>유형</Th>
            <Th style={{ width: "180px" }}>현재 상태</Th>
            <Th style={{ width: "150px" }}>제출자</Th>
            <Th style={{ width: "120px" }}>제출 일시</Th>
            <Th style={{ width: "100px" }}>금액</Th>
            <Th style={{ width: "80px" }}>우선순위</Th>
            <Th style={{ width: "100px" }}>작업</Th>
          </tr>
        </thead>
        <tbody>
          {mockDocuments.map((doc) => (
            <tr key={doc.id}>
              <Td>
                <input type="checkbox" />
              </Td>
              <Td>{doc.id}</Td>
              <Td>
                <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                  {doc.title}
                </div>
                <div
                  style={{
                    color: "#666",
                    fontSize: "9px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {doc.description}
                </div>
              </Td>
              <Td>
                {doc.type === "purchase_request" ? "구매 요청" :
                 doc.type === "expense_report" ? "경비 정산" :
                 doc.type === "contract" ? "계약서" :
                 doc.type === "invoice" ? "청구서" :
                 doc.type === "project_proposal" ? "프로젝트 제안" :
                 doc.type.replace(/_/g, " ").toUpperCase()}
              </Td>
              <Td>
                <StatusBadge status={doc.status}>
                  {getStatusLabel(doc.status)}
                </StatusBadge>
              </Td>
              <Td>{doc.submittedBy}</Td>
              <Td>{new Date(doc.submittedAt).toLocaleString('ko-KR')}</Td>
              <Td>
                {doc.amount
                  ? `${doc.amount.toLocaleString()} ${doc.currency}`
                  : "해당없음"}
              </Td>
              <Td>
                {doc.priority === "low" ? "낮음" :
                 doc.priority === "medium" ? "보통" :
                 doc.priority === "high" ? "높음" :
                 doc.priority === "urgent" ? "긴급" :
                 doc.priority.toUpperCase()}
              </Td>
              <Td>
                <ViewLink href={`/documents/${doc.id}`}>
                  상세보기 열기
                </ViewLink>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ marginTop: "20px", fontSize: "10px", color: "#888" }}>
        <p>
          {mockDocuments.length}개의 문서를 표시하고 있습니다. 마지막 업데이트:{" "}
          {new Date().toLocaleString('ko-KR')}
        </p>
        <p style={{ marginTop: "5px" }}>
          시스템 상태: 정상 가동 중 | 데이터베이스 연결: 활성 | 사용자 세션: 유효
        </p>
      </div>
    </PageContainer>
  );
}
