import styles from "./index.module.scss";

type Container = {
  size?: "default" | "sm" | "md" | "lg" | "xl" | "xxl" | "fluid";
  children?: React.ReactNode;
};

export default function Container({
  size = "default",
  children,
}: Container): JSX.Element {
  return <div className={styles[`container-${size}`]}>{children}</div>;
}
