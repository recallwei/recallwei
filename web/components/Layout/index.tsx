import type { ReactElement } from "react";
import { Container } from "@nextui-org/react";
import styles from "./index.module.sass";

import { default as Navbar } from "../Navbar";

export default function ({
  children,
}: {
  children: ReactElement;
}): JSX.Element {
  return (
    <>
      <Navbar />
      <Container lg className={styles.container}>
        {children}
      </Container>
    </>
  );
}
