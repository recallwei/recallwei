import styles from "./page.module.scss";

const getData = async (): Promise<void> => {
  console.log("🎉 Built by Bruce Song!");
  return;
};

const HomePage = async (): Promise<JSX.Element> => {
  await getData();
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default HomePage;
