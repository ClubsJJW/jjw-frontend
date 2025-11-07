"use client";

import { useAuth } from "@/common/providers/AuthProvider";
import { Button } from "@channel.io/bezier-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f5f6f7;
  border-radius: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #666;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 20px;
`;

export default function MainPage() {
  const { isLoggedIn, profile, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn || !profile) {
    return null;
  }

  return (
    <Container>
      <Header>
        <UserInfo>
          <div>
            <Label>이름: </Label>
            <Value>{profile.name}</Value>
          </div>
          <div>
            <Label>이메일: </Label>
            <Value>{profile.email}</Value>
          </div>
          <div>
            <Label>사용자 ID: </Label>
            <Value>{profile.id}</Value>
          </div>
        </UserInfo>
        <Button text="로그아웃" size="m" onClick={logout} />
      </Header>

      <Content>
        <Title>환영합니다! 🎉</Title>
        <p>
          로그인에 성공하셨습니다. 채널톡 버튼을 클릭하여 문의하시면 현재
          로그인한 사용자 정보가 자동으로 전달됩니다.
        </p>
      </Content>
    </Container>
  );
}
