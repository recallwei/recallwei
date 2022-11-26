import Link from "next/link";
import styles from "./index.module.scss";
import type { Doc } from "@contentlayer";
import { formatDate } from "@utils";

type DocCategoryCardProps = {
  metaData: DocMetaData;
};

type DocMetaData = Doc;

export default function DocCategoryCard({
  metaData,
}: DocCategoryCardProps): JSX.Element {
  return (
    <Link className={styles.card} href={metaData.url}>
      <div className={styles.title}>{metaData.title}</div>
      <div className={styles.date}>{formatDate(metaData.date)}</div>
      <div className={styles.language}>{metaData.language}</div>
    </Link>
  );
}
