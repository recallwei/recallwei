import type { Doc } from "@contentlayer";
import { DocCard } from "@components";

type DocCardListProps = {
  data?: Doc[];
  wrapperClassName?: string;
};

export default function DocCardList({
  data = [],
  wrapperClassName,
}: DocCardListProps): JSX.Element {
  return (
    <div className={wrapperClassName}>
      {data
        .filter((doc: Doc) => !doc.draft)
        .map((doc: Doc) => {
          return <DocCard key={doc._id} metaData={doc} />;
        })}
    </div>
  );
}
