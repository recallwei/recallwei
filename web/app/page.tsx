import Image from "next/image";
import styles from "./page.module.scss";
import { allDocs } from "@contentlayer";
import { DocList } from "./components";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <DocList data={allDocs} wrapperClassName={styles.docListWrapper} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
