import Link from "next/link";
import { Button } from "@nextui-org/react";
import styles from "./index.module.sass";

import { BackButtonProps } from "@interfaces";

export default function BackButton({
  children,
  shadow = false,
  href,
  handleOnClick,
}: BackButtonProps): JSX.Element {
  if (href) {
    return (
      <Button size="sm" shadow={shadow} auto onClick={handleOnClick}>
        <Link href={href} className={styles.link}>
          {children}
        </Link>
      </Button>
    );
  } else {
    return (
      <Button size="sm" shadow={shadow} auto onClick={handleOnClick}>
        {children}
      </Button>
    );
  }
}
