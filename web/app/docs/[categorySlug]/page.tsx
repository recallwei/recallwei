import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
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

  const MDXContent = useMDXComponent(docCategory.body.code);
  const MDXComponents = {};

  return (
    <div>
      <MDXContent components={MDXComponents} />
    </div>
  );
};

export default DocCategoryPage;
