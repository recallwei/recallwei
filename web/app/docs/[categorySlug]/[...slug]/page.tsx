import styles from "./page.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";
import { DocsContent } from "@constants";
import { useAppConfig } from "@hooks";

export async function generateStaticParams() {
  return DocsContent.docStaticParams;
}

const MyButton = () => <button>Click me</button>;

const DocPage = ({ params }): JSX.Element => {
  const { slug } = params;
  console.log(slug);

  //const MDXContent = useMDXComponent(allDocs[0].body.code);
  //const MDXComponents = { MyButton };
  return <div>{/* <MDXContent components={MDXComponents} /> */}</div>;
};

export default DocPage;
