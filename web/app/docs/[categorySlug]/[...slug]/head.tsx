import { DocsContent } from "@constants";
import { DocPageProps } from "./interface";

const Head = async ({ params }: DocPageProps): Promise<JSX.Element> => {
  const doc = DocsContent.docList.find(
    (doc) =>
      doc.slug.join("/") === `${params.categorySlug}/${params.slug.join("/")}`
  );

  return (
    <>
      <title>{doc?.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="I am Bruce Song, this is my personal website."
      />
      <link rel="icon" href="/favicon.png" />
    </>
  );
};

export default Head;
