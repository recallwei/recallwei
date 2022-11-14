import { Layout } from "@components";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
