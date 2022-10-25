import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";

import { BackButtonProps } from "@interfaces";

export default function BackButton({
  children,
  shadow = false,
  href,
  handleOnClick = () => {},
}: BackButtonProps): JSX.Element {
  const router = useRouter();
  if (href) {
    return (
      <Button
        size="sm"
        color="primary"
        shadow={shadow}
        auto
        onClick={() => {
          handleOnClick();
          router.push(href);
        }}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        size="sm"
        color="primary"
        shadow={shadow}
        auto
        onClick={handleOnClick}
      >
        {children}
      </Button>
    );
  }
}
