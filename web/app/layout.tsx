import { Inter } from "@next/font/google";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Noto+Sans+SC:wght@100;300;400;500;700;900&family=Signika+Negative:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta
          name="description"
          content="Bruce Song's personal blog to record problems and solution in daily development."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
