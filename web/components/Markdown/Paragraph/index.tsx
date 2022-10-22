import styles from "./index.module.sass";

export function Paragraph(props: any): JSX.Element {
  return <p {...props} className={styles.p} />;
}
