import type { Doc } from "@contentlayer";
import { DocCategoryCard } from "@components";

type DocCategoryListProps = {
  data?: Doc[];
  wrapperClassName?: string;
};

const DocCategoryList = ({
  data = [],
  wrapperClassName,
}: DocCategoryListProps): JSX.Element => {
  return (
    <div className={wrapperClassName}>
      {data.map((doc: Doc, index) => (
        <DocCategoryCard key={index} metaData={doc} />
      ))}
    </div>
  );
};

export default DocCategoryList;
