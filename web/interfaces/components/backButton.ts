import { ReactNode } from "react";

type BackButtonProps = {
  children: ReactNode;
  shadow: boolean;
  href?: string;
  handleOnClick: () => void;
};

export type { BackButtonProps };
