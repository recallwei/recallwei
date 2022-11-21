import type { Doc } from "@contentlayer";
import DocCard from "./DocCard";

type DocListProps = {
  data?: Doc[];
  wrapperClassName?: string;
};

export default function DocList({
  data = [],
  wrapperClassName,
}: DocListProps): JSX.Element {
  return (
    <div className={wrapperClassName}>
      {data.map((doc: Doc) => {
        return <DocCard key={doc._id} metaData={doc} />;
      })}
    </div>
  );
}
