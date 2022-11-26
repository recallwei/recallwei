import { allDocs } from "@contentlayer";
import type { Doc } from "@contentlayer";
import { orderFc } from "@utils";

type DocsContent = {
  docStaticParams: { slug: string[] }[];
  docCategoryStaticParams: { categorySlug: string }[];
  docCategoryList: Doc[];
};

const docStaticParams = allDocs
  .filter((doc: Doc) => doc.isDoc)
  .map((doc: Doc) => {
    return {
      slug: doc.slug,
    };
  });

const docCategoryStaticParams = allDocs
  .filter((doc: Doc) => doc.isCategory)
  .filter((doc: Doc) => process.env.NODE_ENV === "development" || !doc.draft)
  .map((doc: Doc) => {
    return {
      categorySlug: doc.slug[0],
    };
  });

const docCategoryList = allDocs
  .filter((doc) => doc.isCategory)
  .filter((doc) => process.env.NODE_ENV === "development" || !doc.draft)
  .filter((doc) => doc.date)
  .sort(
    orderFc<Doc>(
      { orderBy: "date", type: "date", desc: true },
      { thenOrderBy: "title", type: "string" }
    )
  );

export const DocsContent: DocsContent = {
  docStaticParams,
  docCategoryStaticParams,
  docCategoryList,
};
