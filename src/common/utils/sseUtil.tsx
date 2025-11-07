export const connectSSE = async (
  eventSource: EventSource,
  onMessage: (data: string) => void,
  // onConnect?: () => void,
  onError?: (error: Event) => void
) => {
  // // 연결 성공 이벤트
  eventSource.addEventListener("heartbeat", (event: MessageEvent) => {
    if (event.data.type === "heartbeat") {
      console.log("SSE 연결 성공");
    }
  });

  // 메시지 수신 이벤트
  eventSource.addEventListener("redirect", (event: MessageEvent) => {
    console.log("redirect", event);
    onMessage(event.data); // 메시지 처리
  });

  // 에러 처리
  eventSource.onerror = (error) => {
    console.log("SSE Error:", error);
    onError?.(error); // 에러 콜백 호출
    eventSource.close(); // 연결 종료
  };

  return eventSource; // 이벤트 소스 반환
};
