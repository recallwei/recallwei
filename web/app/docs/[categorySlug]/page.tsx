import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { DocCategoryList } from "@components";
import { DocsContent } from "@constants";
import styles from "./page.module.scss";

export const generateStaticParams = async () =>
  DocsContent.docCategoryStaticParams;

type DocCategoryPageProps = {
  params: {
    categorySlug: string;
  };
};

const DocCategoryPage = ({ params }: DocCategoryPageProps): JSX.Element => {
  const docCategory = DocsContent.docCategoryList.find(
    (doc) => doc.slug[0] === params.categorySlug
  );

  if (!docCategory) {
    notFound();
  }

  const childDocs = DocsContent.docList.filter(
    (doc) => doc.slug[0] === params.categorySlug
  );

  const MDXContent = useMDXComponent(docCategory.body.code);
  const MDXComponents = {};

  return (
    <div>
      <MDXContent components={MDXComponents} />
      <DocCategoryList
        data={childDocs}
        wrapperClassName={styles.docListWrapper}
      />
    </div>
  );
};

export default DocCategoryPage;
