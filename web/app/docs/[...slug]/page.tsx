import styles from "./page.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allDocs } from "@contentlayer";
import type { Doc } from "@contentlayer";
import { useAppConfig } from "@hooks";

// export async function generateStaticParams() {
//   const doc = allDocs[0];
//   console.log(doc);
//   return { props: { doc } };
// }

const MyButton: React.FC = () => <button>Click me</button>;

const Doc: React.FC<{ doc: any }> = ({ doc }) => {
  const MDXContent = useMDXComponent(allDocs[0].body.code);
  const MDXComponents = { MyButton };
  return (
    <div>
      <MDXContent components={MDXComponents} />
    </div>
  );
};

export default Doc;
