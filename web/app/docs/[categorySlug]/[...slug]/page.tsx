import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { DocsContent } from "@constants";
import styles from "./page.module.scss";
import { DocPageProps } from "./interface";

export const generateStaticParams = async () => DocsContent.docStaticParams;

const DocPage = ({ params }: DocPageProps): JSX.Element => {
  const doc = DocsContent.docList.find(
    (doc) =>
      doc.slug.join("/") === `${params.categorySlug}/${params.slug.join("/")}`
  );

  if (!doc) {
    notFound();
  }

  const MDXContent = useMDXComponent(doc.body.code);
  const MDXComponents = {};

  return (
    <div>
      <MDXContent components={MDXComponents} />
    </div>
  );
};

export default DocPage;
