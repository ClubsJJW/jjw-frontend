import { ConditionalLayout } from "@/common/components/ConditionalLayout";
import { AuthProvider } from "@/common/providers/AuthProvider";
import { BezierProvider } from "@/common/providers/ClientProvider";
import StyledComponentsRegistry from "@/common/providers/StyledComponentsRegistry";
import "@channel.io/bezier-react/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <AuthProvider>
            <BezierProvider>
              <ConditionalLayout>{children}</ConditionalLayout>
            </BezierProvider>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
