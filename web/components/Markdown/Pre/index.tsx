import styles from "./index.module.sass";

export function Pre(props: any): JSX.Element {
  return <pre {...props} className={styles.pre} />;
}
