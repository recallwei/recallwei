import styles from "./page.module.scss";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
