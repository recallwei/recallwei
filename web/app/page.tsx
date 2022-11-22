import styles from "./page.module.scss";

const getData = async () => {
  console.log("🎉 Built by Bruce Song!");
  return null;
};

export default async function Home(): Promise<JSX.Element> {
  await getData();
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
