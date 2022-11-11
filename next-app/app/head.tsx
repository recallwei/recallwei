import { getTitleByRouterId } from "@utils";

export default async function Head() {
  return (
    <>
      <title>{getTitleByRouterId("HOME")}</title>
    </>
  );
}
