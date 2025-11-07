export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  children?: MenuItem[];
}

export const navigationMenu: MenuItem[] = [
  {
    id: "home",
    label: "홈",
    path: "/main",
  },
  {
    id: "academic",
    label: "학사 관리",
    children: [
      {
        id: "academic-registration",
        label: "수강 신청",
        children: [
          {
            id: "academic-registration-apply",
            label: "수강 신청/변경",
            path: "/academic/registration/apply",
          },
          {
            id: "academic-registration-results",
            label: "수강 신청 결과",
            path: "/academic/registration/results",
          },
          {
            id: "academic-registration-cart",
            label: "관심 과목 담기",
            path: "/academic/registration/cart",
          },
        ],
      },
      {
        id: "academic-grades",
        label: "성적 조회",
        children: [
          {
            id: "academic-grades-semester",
            label: "학기별 성적",
            path: "/academic/grades/semester",
          },
          {
            id: "academic-grades-total",
            label: "전체 성적",
            path: "/academic/grades/total",
          },
          {
            id: "academic-grades-rank",
            label: "석차 조회",
            path: "/academic/grades/rank",
          },
        ],
      },
      {
        id: "academic-records",
        label: "학적 관리",
        children: [
          {
            id: "academic-records-info",
            label: "학적 정보",
            path: "/academic/records/info",
          },
          {
            id: "academic-records-leave",
            label: "휴학 신청",
            path: "/academic/records/leave",
          },
          {
            id: "academic-records-return",
            label: "복학 신청",
            path: "/academic/records/return",
          },
          {
            id: "academic-records-transfer",
            label: "전과 신청",
            path: "/academic/records/transfer",
          },
        ],
      },
      {
        id: "academic-graduation",
        label: "졸업 관리",
        children: [
          {
            id: "academic-graduation-requirements",
            label: "졸업 요건 확인",
            path: "/academic/graduation/requirements",
          },
          {
            id: "academic-graduation-apply",
            label: "졸업 신청",
            path: "/academic/graduation/apply",
          },
        ],
      },
    ],
  },
  {
    id: "courses",
    label: "강의",
    children: [
      {
        id: "courses-timetable",
        label: "시간표",
        children: [
          {
            id: "courses-timetable-my",
            label: "내 시간표",
            path: "/courses/timetable/my",
          },
          {
            id: "courses-timetable-search",
            label: "강의 시간표 검색",
            path: "/courses/timetable/search",
          },
        ],
      },
      {
        id: "courses-syllabus",
        label: "강의 계획서",
        path: "/courses/syllabus",
      },
      {
        id: "courses-attendance",
        label: "출결 관리",
        path: "/courses/attendance",
      },
      {
        id: "courses-assignments",
        label: "과제 제출",
        path: "/courses/assignments",
      },
      {
        id: "courses-evaluations",
        label: "강의 평가",
        path: "/courses/evaluations",
      },
    ],
  },
  {
    id: "student-support",
    label: "학생 지원",
    children: [
      {
        id: "scholarship",
        label: "장학금",
        children: [
          {
            id: "scholarship-apply",
            label: "장학금 신청",
            path: "/student-support/scholarship/apply",
          },
          {
            id: "scholarship-results",
            label: "장학금 내역",
            path: "/student-support/scholarship/results",
          },
          {
            id: "scholarship-types",
            label: "장학금 종류",
            path: "/student-support/scholarship/types",
          },
        ],
      },
      {
        id: "loan",
        label: "학자금 대출",
        children: [
          {
            id: "loan-apply",
            label: "대출 신청",
            path: "/student-support/loan/apply",
          },
          {
            id: "loan-status",
            label: "대출 현황",
            path: "/student-support/loan/status",
          },
          {
            id: "loan-repayment",
            label: "상환 관리",
            path: "/student-support/loan/repayment",
          },
        ],
      },
      {
        id: "work-study",
        label: "근로 장학",
        children: [
          {
            id: "work-study-apply",
            label: "근로 장학 신청",
            path: "/student-support/work-study/apply",
          },
          {
            id: "work-study-schedule",
            label: "근무 일정",
            path: "/student-support/work-study/schedule",
          },
          {
            id: "work-study-payment",
            label: "급여 조회",
            path: "/student-support/work-study/payment",
          },
        ],
      },
      {
        id: "counseling",
        label: "상담 센터",
        children: [
          {
            id: "counseling-apply",
            label: "상담 신청",
            path: "/student-support/counseling/apply",
          },
          {
            id: "counseling-history",
            label: "상담 이력",
            path: "/student-support/counseling/history",
          },
        ],
      },
    ],
  },
  {
    id: "facilities",
    label: "시설 이용",
    children: [
      {
        id: "library",
        label: "도서관",
        children: [
          {
            id: "library-search",
            label: "자료 검색",
            path: "/facilities/library/search",
          },
          {
            id: "library-loan",
            label: "대출/반납",
            path: "/facilities/library/loan",
          },
          {
            id: "library-room",
            label: "열람실 예약",
            path: "/facilities/library/room",
          },
          {
            id: "library-seminar",
            label: "세미나실 예약",
            path: "/facilities/library/seminar",
          },
        ],
      },
      {
        id: "dormitory",
        label: "기숙사",
        children: [
          {
            id: "dormitory-apply",
            label: "입사 신청",
            path: "/facilities/dormitory/apply",
          },
          {
            id: "dormitory-payment",
            label: "납부 내역",
            path: "/facilities/dormitory/payment",
          },
          {
            id: "dormitory-meal",
            label: "식사 신청",
            path: "/facilities/dormitory/meal",
          },
        ],
      },
      {
        id: "parking",
        label: "주차",
        children: [
          {
            id: "parking-register",
            label: "차량 등록",
            path: "/facilities/parking/register",
          },
          {
            id: "parking-permit",
            label: "주차권 발급",
            path: "/facilities/parking/permit",
          },
        ],
      },
    ],
  },
  {
    id: "certificates",
    label: "증명서 발급",
    children: [
      {
        id: "certificates-enrollment",
        label: "재학 증명서",
        path: "/certificates/enrollment",
      },
      {
        id: "certificates-graduation",
        label: "졸업 증명서",
        path: "/certificates/graduation",
      },
      {
        id: "certificates-transcript",
        label: "성적 증명서",
        path: "/certificates/transcript",
      },
      {
        id: "certificates-history",
        label: "발급 내역",
        path: "/certificates/history",
      },
    ],
  },
  {
    id: "community",
    label: "커뮤니티",
    children: [
      {
        id: "community-notice",
        label: "공지사항",
        path: "/community/notice",
      },
      {
        id: "community-news",
        label: "학교 소식",
        path: "/community/news",
      },
      {
        id: "community-board",
        label: "학생 게시판",
        path: "/community/board",
      },
      {
        id: "community-club",
        label: "동아리",
        path: "/community/club",
      },
    ],
  },
  {
    id: "professor",
    label: "교수 전용",
    children: [
      {
        id: "professor-courses",
        label: "강의 관리",
        children: [
          {
            id: "professor-courses-list",
            label: "담당 강의",
            path: "/professor/courses/list",
          },
          {
            id: "professor-courses-syllabus",
            label: "강의 계획서 작성",
            path: "/professor/courses/syllabus",
          },
          {
            id: "professor-courses-attendance",
            label: "출결 관리",
            path: "/professor/courses/attendance",
          },
        ],
      },
      {
        id: "professor-grades",
        label: "성적 관리",
        children: [
          {
            id: "professor-grades-input",
            label: "성적 입력",
            path: "/professor/grades/input",
          },
          {
            id: "professor-grades-statistics",
            label: "성적 통계",
            path: "/professor/grades/statistics",
          },
        ],
      },
      {
        id: "professor-research",
        label: "연구 관리",
        children: [
          {
            id: "professor-research-projects",
            label: "연구 과제",
            path: "/professor/research/projects",
          },
          {
            id: "professor-research-budget",
            label: "연구비 관리",
            path: "/professor/research/budget",
          },
          {
            id: "professor-research-publications",
            label: "논문 관리",
            path: "/professor/research/publications",
          },
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "설정",
    children: [
      {
        id: "settings-profile",
        label: "프로필 설정",
        path: "/settings/profile",
      },
      {
        id: "settings-password",
        label: "비밀번호 변경",
        path: "/settings/password",
      },
      {
        id: "settings-notifications",
        label: "알림 설정",
        path: "/settings/notifications",
      },
    ],
  },
];
