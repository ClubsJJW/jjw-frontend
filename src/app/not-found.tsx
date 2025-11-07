"use client";

import { Button, Text } from "@channel.io/bezier-react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
  background: #f8f9fa;
`;

const Content = styled.div`
  text-align: center;
  max-width: 500px;
`;

const Title = styled(Text)`
  margin-bottom: 16px;
  display: block;
`;

const Description = styled(Text)`
  margin-bottom: 32px;
  display: block;
  color: #868e96;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export default function NotFound() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Title typo="24" bold>
          페이지를 찾을 수 없습니다
        </Title>
        <Description typo="16">
          요청하신 페이지가 존재하지 않거나 아직 구현되지 않았습니다.
          <br />
          홈으로 돌아가거나 이전 페이지로 이동해주세요.
        </Description>

        <Button
          text="홈으로 이동"
          size="l"
          styleVariant="primary"
          onClick={() => router.push("/main")}
        />
      </Content>
    </Container>
  );
}
