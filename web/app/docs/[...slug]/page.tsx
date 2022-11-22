import styles from "./page.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allDocs } from "@contentlayer";
import type { Doc } from "@contentlayer";

// export async function generateStaticParams() {
//   return allDocs[0];
// }

export default async function () {
  const MDXContent = useMDXComponent(allDocs[0].body.code);
  const MDXComponents = {};
  return (
    <div>
      <MDXContent components={MDXComponents} />
    </div>
  );
}
