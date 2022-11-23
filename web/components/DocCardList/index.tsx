import type { Doc, IsoDateTimeString } from "@contentlayer";
import { DocCard } from "@components";
import { orderFc } from "@utils";

type DocCardListProps = {
  data?: Doc[];
  wrapperClassName?: string;
};

export default function DocCardList({
  data = [],
  wrapperClassName,
}: DocCardListProps): JSX.Element {
  // data.forEach((item) => {
  //   console.log(item.slug);
  // });
  const ENV = process.env.NODE_ENV;

  let docList: Doc[] = data;

  if (ENV === "development") {
  }
  // Hide the draft docs in production and test environment.
  else if (ENV === "production" || ENV === "test") {
    docList = docList.filter((doc: Doc) => !doc.draft);
  }

  // Compare by date, then sort by title.
  // const compareFc = (left: Doc, right: Doc) => {
  //   const dateA = left.date as IsoDateTimeString;
  //   const dateB = right.date as IsoDateTimeString;
  //   const textA = left.title;
  //   const textB = right.title;
  //   if (dateA === dateB) {
  //     return textA.localeCompare(textB, "en");
  //   } else {
  //     return dateA > dateB ? -1 : 1;
  //   }
  // };

  docList = docList.filter((doc: Doc) => doc.date);
  docList.sort(
    orderFc<Doc>(
      { orderBy: "date", type: "date", desc: true },
      { thenOrderBy: "title", type: "string" }
    )
  );

  return (
    <div className={wrapperClassName}>
      {docList.map((doc: Doc, index) => {
        return <DocCard key={index} metaData={doc} />;
      })}
    </div>
  );
}
