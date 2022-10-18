import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Navbar, Text, Link, Image } from "@nextui-org/react";
import styles from "./index.module.scss";

import { AppConfig, BuiltInRouters } from "@constants";
import type { BuiltInRouter, RouterType } from "@interfaces";
import { activeNavbarItemState } from "@state";
import { convertPathToActiveNavbarItem } from "@utils";

export default function (): JSX.Element {
  const router = useRouter();

  const [activeNavbarItem, setActiveNavbarItem] = useRecoilState(
    activeNavbarItemState
  );

  useEffect(() => {
    setActiveNavbarItem(
      convertPathToActiveNavbarItem(router.pathname) as BuiltInRouter
    );
  }, []);

  return (
    <Navbar
      isBordered
      variant="floating"
      shouldHideOnScroll={AppConfig.navbar.shouldHideOnScroll}
    >
      <Navbar.Brand css={{ gap: "$4" }}>
        <Navbar.Toggle showIn="xs" />
        <Image
          src="/favicon.png"
          alt={AppConfig.info.name}
          width={AppConfig.brand.imageWidth}
          height={AppConfig.brand.imageHeight}
          showSkeleton={AppConfig.brand.showSkeleton}
        />
        <Text
          b
          size="$xl"
          css={{ fontFamily: "$cursive" }}
          className={styles.brandText}
        >
          {AppConfig.info.name}
        </Text>
      </Navbar.Brand>
      <Navbar.Content variant="highlight" enableCursorHighlight hideIn="xs">
        {BuiltInRouters.map((routerItem: RouterType) => {
          return (
            <Navbar.Link
              key={routerItem.name}
              href={routerItem.to}
              isActive={activeNavbarItem === routerItem.name}
              onClick={() => {
                setActiveNavbarItem(routerItem.name as BuiltInRouter);
              }}
            >
              {routerItem.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Content>
      <Navbar.Collapse>
        {BuiltInRouters.map((routerItem: RouterType) => {
          return (
            <Navbar.CollapseItem key={routerItem.name}>
              <Link href={routerItem.to}>{routerItem.name}</Link>
            </Navbar.CollapseItem>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
