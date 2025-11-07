import { AuthProvider } from "@/common/providers/AuthProvider";
import { BezierProvider } from "@/common/providers/ClientProvider";
import "@channel.io/bezier-react/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          <BezierProvider>{children}</BezierProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
