import type { ReactElement } from "react";
import { Container } from "@nextui-org/react";
import { default as Navbar } from "./Navbar";

export default function ({
  children,
}: {
  children: ReactElement;
}): JSX.Element {
  return (
    <>
      <Navbar />
      <Container fluid css={{ minHeight: "100vh", padding: "$8" }}>
        {children}
      </Container>
    </>
  );
}
