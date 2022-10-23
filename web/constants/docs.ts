import type { DocType, DocChannelType } from "@interfaces";

const DocsItems: Array<DocType | DocChannelType> = [
  {
    id: "/docs/front-end/file-structure",
    title: "测试 Markdown 渲染结构",
  },
  {
    id: "/docs/front-end/engineering",
    title: "前端工程化",
  },
  {
    id: "/docs/react/project",
    title: "搭建 React 项目",
  },
  {
    id: "/docs/nextjs/why-choose-nextjs",
    title: "为什么选择 Next.js",
    draft: true,
  },
];

export { DocsItems };
