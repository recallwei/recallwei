import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the doc.",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the doc.",
      required: false,
    },
    date: {
      type: "date",
      description: "The date of the doc.",
      required: false,
    },
    language: {
      type: "string",
      description: "The language of the doc.",
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "The tags of the doc.",
      required: false,
    },
    draft: {
      type: "boolean",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "list",
      resolve: (doc) => doc._raw.flattenedPath.split("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Doc],
  mdx: { rehypePlugins: [] },
});
