export const connectSSE = async (
  url: string,
  onMessage: (data: any) => void,
  onConnect?: () => void,
  onError?: (error: any) => void
) => {
  // SSE 연결 설정
  const eventSource = new EventSource(url);

  // 연결 성공 이벤트
  eventSource.addEventListener("connect", (event: MessageEvent) => {
    if (event.data === "SSE 연결이 완료되었습니다.") {
      onConnect?.(); // 연결 완료 콜백 호출
    }
  });

  // 메시지 수신 이벤트
  eventSource.addEventListener("message", (event: MessageEvent) => {
    onMessage(event.data); // 메시지 처리
  });

  // 에러 처리
  eventSource.onerror = (error) => {
    console.error("SSE Error:", error);
    onError?.(error); // 에러 콜백 호출
    eventSource.close(); // 연결 종료
  };

  return eventSource; // 이벤트 소스 반환
};
