"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  TextField,
} from "@channel.io/bezier-react";
import { useState } from "react";
import styled from "styled-components";
import type { LoginFormData } from "../types";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
`;

interface LoginFormProps {
  onLogin: (data: LoginFormData) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    nickname: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nickname: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nickname: "",
      password: "",
    };

    if (!formData.nickname.trim()) {
      newErrors.nickname = "이름을 입력해주세요.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }

    setErrors(newErrors);

    if (!newErrors.nickname && !newErrors.password) {
      onLogin(formData);
    }
  };

  return (
    <FormContainer>
      <FormTitle>로그인</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl hasError={!!errors.nickname}>
            <FormLabel>이름</FormLabel>
            <TextField
              value={formData.nickname}
              onChange={(e) =>
                setFormData({ ...formData, nickname: e.target.value })
              }
              placeholder="이름을 입력하세요"
            />
            {errors.nickname && (
              <FormErrorMessage>{errors.nickname}</FormErrorMessage>
            )}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <FormControl hasError={!!errors.password}>
            <FormLabel>비밀번호</FormLabel>
            <TextField
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="비밀번호를 입력하세요"
            />
            {errors.password && (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            )}
          </FormControl>
        </FormGroup>

        <ButtonContainer>
          <Button
            type="submit"
            text="로그인"
            size="l"
            styleVariant="primary"
            style={{ width: "100%" }}
          />
        </ButtonContainer>
      </form>
    </FormContainer>
  );
}
