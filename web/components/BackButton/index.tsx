import { forwardRef } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

import { BackButtonProps } from "@interfaces";

export const BackButton = forwardRef(
  ({
    children,
    shadow = false,
    handleOnClick,
    ref,
  }: BackButtonProps): JSX.Element => {
    return (
      <Button
        ref={ref}
        size="sm"
        color="gradient"
        shadow={shadow}
        auto
        onClick={handleOnClick}
      >
        {children}
      </Button>
    );
  }
);

export function BackButtonWithLink({
  href,
  handleOnClick,
  children,
}): JSX.Element {
  return (
    <Link href={href} passHref>
      <a>
        <BackButton shadow handleOnClick={handleOnClick}>
          {children}
        </BackButton>
      </a>
    </Link>
  );
}
