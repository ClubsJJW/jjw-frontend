"use client";

import styled from "styled-components";
import { Text, Button, Box, Select } from "@channel.io/bezier-react";

const PageContainer = styled.div``;

const PageHeader = styled.div`
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e9ecef;
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 8px;
  scroll-margin-top: 20px;
`;

const InfoBox = styled.div`
  padding: 16px;
  background: white;
  border-radius: 6px;
  margin-bottom: 12px;
  border: 1px solid #e9ecef;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const RoomCard = styled.div<{ $available: boolean }>`
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 2px solid ${(props) => (props.$available ? "#4CAF50" : "#e9ecef")};
  cursor: ${(props) => (props.$available ? "pointer" : "not-allowed")};
  opacity: ${(props) => (props.$available ? 1 : 0.6)};
  transition: all 0.2s;

  &:hover {
    transform: ${(props) => (props.$available ? "translateY(-2px)" : "none")};
    box-shadow: ${(props) =>
      props.$available ? "0 4px 12px rgba(0,0,0,0.1)" : "none"};
  }
`;

const TimeSlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-top: 12px;
`;

const TimeSlot = styled.div<{ $available: boolean; $selected?: boolean }>`
  padding: 8px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  background: ${(props) =>
    props.$selected ? "#2196F3" : props.$available ? "#E8F5E9" : "#FFEBEE"};
  color: ${(props) => (props.$selected ? "white" : "inherit")};
  border: 1px solid
    ${(props) =>
      props.$selected ? "#2196F3" : props.$available ? "#4CAF50" : "#F44336"};
  cursor: ${(props) => (props.$available ? "pointer" : "not-allowed")};
`;

const FilterBox = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

const FlexBox = styled.div<{
  $justify?: string;
  $align?: string;
  $gap?: number;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  gap: ${(props) => props.$gap || 0}px;
`;

export default function LibraryRoomReservationPage() {
  return (
    <PageContainer>
      <PageHeader>
        <Text typo="30" bold>
          열람실 좌석 예약
        </Text>
        <Text typo="16" color="txt-black-darker" style={{ marginTop: "8px" }}>
          도서관 열람실 좌석을 예약할 수 있습니다
        </Text>
      </PageHeader>

      <Section id="guidelines">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          📢 이용 안내
        </Text>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            1. 예약 가능 시간
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 평일: 06:00 ~ 24:00
            <br />- 주말 및 공휴일: 08:00 ~ 22:00
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            2. 예약 규칙
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 1일 최대 8시간까지 예약 가능
            <br />
            - 2시간 단위로 예약 가능
            <br />- 당일 예약만 가능
          </Text>
        </InfoBox>
        <InfoBox>
          <Text typo="14" bold style={{ marginBottom: "8px" }}>
            3. 퇴실 처리
          </Text>
          <Text typo="14" color="txt-black-darker">
            - 예약 후 30분 이내 미입실 시 자동 취소
            <br />
            - 퇴실 시 반드시 퇴실 처리 필요
            <br />- 무단 이탈 3회 시 1주일 이용 제한
          </Text>
        </InfoBox>
      </Section>

      <Section id="filter">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          열람실 선택
        </Text>
        <FilterBox>
          <Text typo="14" style={{ minWidth: "60px" }}>
            건물
          </Text>
          <Select placeholder="중앙도서관" style={{ width: "200px" }} />
          <Text typo="14" style={{ minWidth: "60px" }}>
            층
          </Text>
          <Select placeholder="3층" style={{ width: "150px" }} />
          <Text typo="14" style={{ minWidth: "60px" }}>
            열람실
          </Text>
          <Select placeholder="제1열람실" style={{ width: "200px" }} />
          <Button text="조회" size="m" colorVariant="blue" />
        </FilterBox>
      </Section>

      <Section id="room-status">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          현재 좌석 현황 - 제1열람실 (3층)
        </Text>
        <Box padding={16} backgroundColor="bg-white-normal" marginBottom={16}>
          <Text typo="16" bold>
            전체: 120석 | 사용중: 85석 | 예약: 15석 | 공석: 20석
          </Text>
        </Box>
        <Grid>
          <RoomCard $available={true}>
            <Text typo="16" bold>
              좌석 A-01
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              개인석 | 콘센트 ○
            </Text>
            <Box marginTop={12}>
              <Button
                text="예약하기"
                size="s"
                colorVariant="blue"
                style={{ width: "100%" }}
              />
            </Box>
          </RoomCard>
          <RoomCard $available={false}>
            <Text typo="16" bold>
              좌석 A-02
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              개인석 | 콘센트 ○
            </Text>
            <Box marginTop={12}>
              <Text typo="14">사용중</Text>
            </Box>
          </RoomCard>
          <RoomCard $available={true}>
            <Text typo="16" bold>
              좌석 A-03
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              개인석 | 콘센트 ○
            </Text>
            <Box marginTop={12}>
              <Button
                text="예약하기"
                size="s"
                colorVariant="blue"
                style={{ width: "100%" }}
              />
            </Box>
          </RoomCard>
          <RoomCard $available={true}>
            <Text typo="16" bold>
              좌석 A-04
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              개인석 | 콘센트 ○
            </Text>
            <Box marginTop={12}>
              <Button
                text="예약하기"
                size="s"
                colorVariant="blue"
                style={{ width: "100%" }}
              />
            </Box>
          </RoomCard>
          <RoomCard $available={false}>
            <Text typo="16" bold>
              좌석 A-05
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              개인석 | 콘센트 ○
            </Text>
            <Box marginTop={12}>
              <Text typo="14">예약됨</Text>
            </Box>
          </RoomCard>
          <RoomCard $available={true}>
            <Text typo="16" bold>
              좌석 A-06
            </Text>
            <Text
              typo="14"
              color="txt-black-darker"
              style={{ marginTop: "8px" }}
            >
              개인석 | 콘센트 ○
            </Text>
            <Box marginTop={12}>
              <Button
                text="예약하기"
                size="s"
                colorVariant="blue"
                style={{ width: "100%" }}
              />
            </Box>
          </RoomCard>
        </Grid>
      </Section>

      <Section id="time-selection">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          시간대 선택 - 좌석 A-01
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <Text typo="14" style={{ marginBottom: "12px" }}>
            이용 가능한 시간대를 선택하세요 (2시간 단위)
          </Text>
          <TimeSlotGrid>
            <TimeSlot $available={true}>06-08시</TimeSlot>
            <TimeSlot $available={true}>08-10시</TimeSlot>
            <TimeSlot $available={false}>10-12시</TimeSlot>
            <TimeSlot $available={false}>12-14시</TimeSlot>
            <TimeSlot $available={true}>14-16시</TimeSlot>
            <TimeSlot $available={true} $selected={true}>
              16-18시
            </TimeSlot>
            <TimeSlot $available={true}>18-20시</TimeSlot>
            <TimeSlot $available={true}>20-22시</TimeSlot>
            <TimeSlot $available={false}>22-24시</TimeSlot>
          </TimeSlotGrid>
          <Box marginTop={16}>
            <Text typo="14">선택한 시간: 16:00 - 18:00 (2시간)</Text>
          </Box>
        </Box>
      </Section>

      <Section id="my-reservations">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          내 예약 현황
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <InfoBox>
            <FlexBox $justify="space-between" $align="center">
              <div>
                <Text typo="16" bold>
                  제1열람실 - 좌석 B-15
                </Text>
                <Text
                  typo="14"
                  color="txt-black-darker"
                  style={{ marginTop: "4px" }}
                >
                  2024.02.15 14:00 ~ 16:00
                </Text>
              </div>
              <FlexBox $gap={8}>
                <Button text="입실 처리" size="s" colorVariant="blue" />
                <Button text="예약 취소" size="s" colorVariant="red" />
              </FlexBox>
            </FlexBox>
          </InfoBox>
        </Box>
      </Section>

      <Section id="confirm">
        <Text typo="22" bold style={{ marginBottom: "16px" }}>
          예약 확정
        </Text>
        <Box padding={20} backgroundColor="bg-white-normal">
          <Text typo="14" style={{ marginBottom: "16px" }}>
            <strong>좌석:</strong> 제1열람실 A-01
            <br />
            <strong>날짜:</strong> 2024년 2월 15일
            <br />
            <strong>시간:</strong> 16:00 ~ 18:00 (2시간)
          </Text>
          <FlexBox $gap={12}>
            <Button text="취소" size="l" colorVariant="monochrome-light" />
            <Button text="예약 확정" size="l" colorVariant="blue" />
          </FlexBox>
        </Box>
      </Section>
    </PageContainer>
  );
}
