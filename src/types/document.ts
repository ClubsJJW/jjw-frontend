export type DocumentStatus =
  | "pending_review"
  | "in_review"
  | "approved"
  | "rejected"
  | "awaiting_additional_info"
  | "escalated";

export type DocumentType =
  | "purchase_request"
  | "expense_report"
  | "contract"
  | "invoice"
  | "project_proposal";

export interface DocumentAttachment {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
  url: string;
}

export interface ApprovalHistory {
  id: string;
  reviewerName: string;
  action: "approved" | "rejected" | "requested_changes";
  comment: string;
  timestamp: string;
}

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  status: DocumentStatus;
  submittedBy: string;
  submittedAt: string;
  department: string;
  amount?: number;
  currency?: string;
  description: string;
  attachments: DocumentAttachment[];
  approvalHistory: ApprovalHistory[];
  priority: "low" | "medium" | "high" | "urgent";
  reviewRequired: boolean;
  complianceCheck: boolean;
  budgetApprovalNeeded: boolean;
  legalReviewRequired: boolean;
}
