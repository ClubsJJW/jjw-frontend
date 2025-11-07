"use client";

import { AuthProvider } from "@/common/providers/AuthProvider";
import { BezierProvider } from "@/common/providers/ClientProvider";
import { MainLayout } from "@/common/components/MainLayout";
import "@channel.io/bezier-react/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>
        <AuthProvider>
          <BezierProvider>
            <MainLayout>{children}</MainLayout>
          </BezierProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
