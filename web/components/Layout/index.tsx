import type { ReactElement } from "react";
import { Navbar, Container } from "@components";

export default function ({
  children,
}: {
  children: ReactElement;
}): JSX.Element {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
