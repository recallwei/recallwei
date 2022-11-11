import { ReactElement } from "react";

export default function ({
  children,
}: {
  children: ReactElement;
}): JSX.Element {
  return <>{children}</>;
}
