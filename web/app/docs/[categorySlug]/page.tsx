import { DocsContent } from "@constants";

export const generateStaticParams = async () => {
  return DocsContent.docCategoryStaticParams;
};

const DocCategoryPage = ({ params }): JSX.Element => {
  console.log(params);

  return <></>;
};

export default DocCategoryPage;
