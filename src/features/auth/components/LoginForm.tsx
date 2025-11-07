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
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      onLogin(formData);
    }
  };

  return (
    <FormContainer>
      <FormTitle>로그인</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl hasError={!!errors.name}>
            <FormLabel>이름</FormLabel>
            <TextField
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="이름을 입력하세요"
            />
            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <FormControl hasError={!!errors.email}>
            <FormLabel>이메일</FormLabel>
            <TextField
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="이메일을 입력하세요"
            />
            {errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
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
