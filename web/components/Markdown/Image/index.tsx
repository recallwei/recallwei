import NextImage from "next/image";
import styles from "./index.module.sass";

export function Image(props: any): JSX.Element {
  return (
    <NextImage
      alt={props.alt}
      layout="responsive"
      {...props}
      className={styles.image}
    />
  );
}
