import type { DocType, DocChannelType } from "@interfaces";

const DocsItems: Array<DocType | DocChannelType> = [
  {
    id: "/docs/front-end/file-structure",
    title: "测试 Markdown 渲染结构",
    description: "这是一个测试文档",
    finishedAt: "2022-10-24",
  },
  {
    id: "/docs/front-end/engineering",
    title: "前端工程化",
    finishedAt: "2022-10-24",
  },
  {
    id: "/docs/react/project",
    title: "搭建 React 项目",
    finishedAt: "2022-10-24",
  },
  {
    id: "/docs/nextjs/why-choose-nextjs",
    title: "为什么选择 Next.js",
    finishedAt: "2022-10-24",
  },
  {
    id: "/docs/sass",
    title: "Sass",
    description: "Sass: Syntactically Awesome Style Sheet",
    finishedAt: "2022-10-24",
  },
];

export { DocsItems };
