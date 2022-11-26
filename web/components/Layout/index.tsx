import { Container } from "@components";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Container size="xl">
      <Navbar />
      <div style={{ height: "2000px" }}>{children}</div>
    </Container>
  );
};

export default Layout;
