import styles from "./page.module.scss";
import { allDocs } from "@contentlayer";
import { DocList } from "./components";

export default function Docs() {
  return (
    <div>
      <DocList data={allDocs} wrapperClassName={styles.docListWrapper} />
    </div>
  );
}
