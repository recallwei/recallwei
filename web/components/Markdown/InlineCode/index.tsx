import styles from "./index.module.sass";

export function InlineCode(props: any): JSX.Element {
  return <code {...props} className={styles.inlineCode} />;
}
