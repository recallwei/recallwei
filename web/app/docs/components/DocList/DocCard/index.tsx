import Link from "next/link";
import type { Doc } from "@contentlayer";
import styles from "./index.module.scss";

type DocCardProps = {
  metaData: DocMetaData;
};

type DocMetaData = Doc;

export default function DocCard({ metaData }: DocCardProps): JSX.Element {
  return (
    <Link className={styles.card} href={metaData.url}>
      <div className={styles.title}>{metaData.title}</div>
      <div className={styles.date}>{metaData.date}</div>
      <div className={styles.language}>{metaData.language}</div>
    </Link>
  );
}
