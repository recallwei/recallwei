import styles from "./index.module.sass";

export function H1(props: any): JSX.Element {
  return <h1 {...props} className={styles.h1} />;
}

export function H2(props: any): JSX.Element {
  return <h2 {...props} className={styles.h2} />;
}

export function H3(props: any): JSX.Element {
  return <h3 {...props} className={styles.h3} />;
}

export function H4(props: any): JSX.Element {
  return <h4 {...props} className={styles.h4} />;
}

export function H5(props: any): JSX.Element {
  return <h5 {...props} className={styles.h5} />;
}

export function H6(props: any): JSX.Element {
  return <h6 {...props} className={styles.h6} />;
}
