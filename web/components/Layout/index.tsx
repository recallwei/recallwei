import { Container } from "@components";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Container size="xl">
      <Navbar />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
