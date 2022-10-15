import type { ReactElement } from "react";
import { Container } from "@nextui-org/react";

export default function ({
  children,
}: {
  children: ReactElement;
}): JSX.Element {
  return (
    <Container fluid css={{ minHeight: "100vh", padding: "$8" }}>
      {children}
    </Container>
  );
}
