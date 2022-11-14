import Navbar from "./Navbar";
import styles from "./index.module.scss";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
}
