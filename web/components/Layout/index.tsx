import { Container } from "@components";
import Navbar from "./Navbar";
import styles from "./index.module.scss";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container size="xl">
      <Navbar />
      <div style={{ height: "2000px" }}>{children}</div>
    </Container>
  );
}
