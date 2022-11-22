import styles from "./page.module.scss";
import { allDocs } from "@contentlayer";
import { DocCardList } from "@components";

export default function Docs() {
  return (
    <div>
      <DocCardList data={allDocs} wrapperClassName={styles.docListWrapper} />
    </div>
  );
}
