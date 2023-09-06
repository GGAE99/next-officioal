export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 메타데이터, 스타일시트 및 기타 설정 */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}