import { makeSource } from "contentlayer/source-files";
import { DocType } from "@interfaces";

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [DocType],
  mdx: { rehypePlugins: [] },
});
