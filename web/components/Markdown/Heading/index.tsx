import styles from "./index.module.sass";

export function H1(props: any): JSX.Element {
  return <div {...props} className={styles.h1} />;
}

export function H2(props: any): JSX.Element {
  return <div {...props} className={styles.h2} />;
}

export function H3(props: any): JSX.Element {
  return <div {...props} className={styles.h3} />;
}

export function H4(props: any): JSX.Element {
  return <div {...props} className={styles.h4} />;
}

export function H5(props: any): JSX.Element {
  return <div {...props} className={styles.h5} />;
}

export function H6(props: any): JSX.Element {
  return <div {...props} className={styles.h6} />;
}
