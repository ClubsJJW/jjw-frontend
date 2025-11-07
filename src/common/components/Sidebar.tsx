"use client";

import { useAuth } from "@/common/providers/AuthProvider";
import { MenuItem } from "@/common/types/navigation";
import { ChevronDownIcon, ChevronRightIcon } from "@channel.io/bezier-icons";
import { Button, Text } from "@channel.io/bezier-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

// 구현된 페이지 경로 목록
const IMPLEMENTED_PAGES = [
  "/main",
  "/my",
  "/student-support/scholarship/apply",
  "/academic/registration/apply",
  "/academic/grades/semester",
  "/facilities/library/room",
  "/certificates/enrollment",
  "/professor/courses/list",
  "/professor/grades/input",
  "/professor/research/projects",
];

const SidebarContainer = styled.aside`
  width: 280px;
  height: 100vh;
  background: #f8f9fa;
  border-right: 1px solid #e9ecef;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #e9ecef;
`;

const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

const SidebarFooter = styled.div`
  padding: 16px 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
`;

const UserInfo = styled.div`
  margin-bottom: 12px;
  padding: 8px 0;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 8px 0;
  margin: 0;
  overflow: hidden;
`;

const MenuItemContainer = styled.li<{ $depth: number }>`
  padding-left: ${(props) => props.$depth * 16 + 12}px;
  padding-right: 12px;
  box-sizing: border-box;
  overflow: hidden;
`;

const MenuButton = styled.button<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: ${(props) => (props.$isActive ? "#e7f5ff" : "transparent")};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;
  margin: 2px 0;
  box-sizing: border-box;
  min-width: 0;

  &:hover {
    background: ${(props) => (props.$isActive ? "#e7f5ff" : "#f1f3f5")};
  }
`;

const MenuLink = styled(Link)<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: ${(props) => (props.$isActive ? "#e7f5ff" : "transparent")};
  border-radius: 6px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
  margin: 2px 0;
  box-sizing: border-box;
  min-width: 0;

  &:hover {
    background: ${(props) => (props.$isActive ? "#e7f5ff" : "#f1f3f5")};
  }
`;

const DisabledMenuItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: transparent;
  border-radius: 6px;
  color: #adb5bd;
  cursor: not-allowed;
  margin: 2px 0;
  opacity: 0.5;
  box-sizing: border-box;
  min-width: 0;
`;

const MenuLabel = styled(Text)`
  flex: 1;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

interface MenuItemComponentProps {
  item: MenuItem;
  depth?: number;
}

// 메뉴 아이템 또는 그 하위 메뉴 중 하나라도 구현되어 있는지 확인
function hasAnyImplementedPage(item: MenuItem): boolean {
  if (item.path && IMPLEMENTED_PAGES.includes(item.path)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => hasAnyImplementedPage(child));
  }
  return false;
}

function MenuItemComponent({ item, depth = 0 }: MenuItemComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;
  const isImplemented = item.path
    ? IMPLEMENTED_PAGES.includes(item.path)
    : false;
  const hasImplementedChildren = hasChildren
    ? hasAnyImplementedPage(item)
    : false;

  if (hasChildren) {
    return (
      <MenuItemContainer $depth={depth}>
        <MenuButton $isActive={isActive} onClick={() => setIsOpen(!isOpen)}>
          <MenuLabel
            style={{ color: hasImplementedChildren ? "inherit" : "#adb5bd" }}
          >
            {item.label}
          </MenuLabel>
          <IconWrapper>
            {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </IconWrapper>
        </MenuButton>
        {isOpen && (
          <MenuList>
            {item.children!.map((child) => (
              <MenuItemComponent
                key={child.id}
                item={child}
                depth={depth + 1}
              />
            ))}
          </MenuList>
        )}
      </MenuItemContainer>
    );
  }

  return (
    <MenuItemContainer $depth={depth}>
      {isImplemented ? (
        <MenuLink href={item.path!} $isActive={isActive}>
          <MenuLabel>{item.label}</MenuLabel>
        </MenuLink>
      ) : (
        <DisabledMenuItem>
          <MenuLabel>{item.label}</MenuLabel>
        </DisabledMenuItem>
      )}
    </MenuItemContainer>
  );
}

interface SidebarProps {
  menuItems: MenuItem[];
}

export function Sidebar({ menuItems }: SidebarProps) {
  const { isLoggedIn, logout, profile } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  // 로그인하지 않은 경우 홈 메뉴만 필터링
  const filteredMenuItems = isLoggedIn
    ? menuItems
    : menuItems.filter((item) => item.path === "/main");

  return (
    <SidebarContainer>
      <SidebarHeader>
        <div>
          <Text typo="24" bold>
            대학 포털
          </Text>
        </div>
        <div>
          <Text typo="14" color="txt-black-darker" style={{ marginTop: "4px" }}>
            통합 정보 시스템
          </Text>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <nav>
          <MenuList>
            {filteredMenuItems.map((item) => (
              <MenuItemComponent key={item.id} item={item} />
            ))}
          </MenuList>
        </nav>
      </SidebarContent>
      <SidebarFooter>
        {isLoggedIn ? (
          <>
            <UserInfo>
              <Text typo="14" bold>
                {profile?.name}
              </Text>{" "}
              {profile?.email && (
                <Text typo="12" color="txt-black-darker">
                  {profile.email}
                </Text>
              )}
            </UserInfo>
            <Button
              text="로그아웃"
              size="m"
              styleVariant="secondary"
              onClick={handleLogout}
              style={{ width: "100%" }}
            />
          </>
        ) : (
          <Button
            text="로그인"
            size="m"
            styleVariant="primary"
            onClick={handleLogin}
            style={{ width: "100%" }}
          />
        )}
      </SidebarFooter>
    </SidebarContainer>
  );
}
