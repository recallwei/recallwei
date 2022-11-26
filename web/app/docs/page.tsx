import styles from "./page.module.scss";
import { DocCategoryList } from "@components";
import { DocsContent } from "@constants";

const DocCategoryListPage = (): JSX.Element => {
  return (
    <div>
      <DocCategoryList
        data={DocsContent.docCategoryList}
        wrapperClassName={styles.docListWrapper}
      />
    </div>
  );
};

export default DocCategoryListPage;
