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

const Label = styled.span`
  font-size: 14px;
  color: #666;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export default function MainPage() {
  const { isLoggedIn, profile, logout, fetchUserInfo } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      // API에서 최신 사용자 정보 가져오기
      fetchUserInfo();
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
            <Label>사용자 ID: </Label>
            <Value>{profile.id}</Value>
          </div>
        </UserInfo>
        <Button text="로그아웃" size="m" onClick={logout} />
      </Header>
    </Container>
  );
}
