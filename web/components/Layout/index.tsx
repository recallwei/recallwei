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
      <div>{children}</div>
    </Container>
  );
}
