import styles from "./page.module.scss";
import { allDocs } from "@contentlayer";
import type { Doc } from "@contentlayer";

export async function generateStaticParams() {
  return allDocs
    .filter((doc: Doc) => !doc.draft)
    .map((doc: Doc) => ({
      slug: doc.slug,
    }));
}

export default async function ({ params }: { params: { slug: string } }) {
  console.log(params);
  return <div></div>;
}
