import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import { useRecoilState } from "recoil";
import { Navbar, Text, Link } from "@nextui-org/react";
import clsx from "clsx";
import styles from "./index.module.sass";

import { AppConfig } from "@config";
import type { RouterType } from "@interfaces";
import { activeNavbarItemState } from "@state";
import { getActiveNavbarItemIdByRoute } from "@utils";

export default function (): JSX.Element {
  const router = useRouter();

  const [activeNavbarItem, setActiveNavbarItem] = useRecoilState(
    activeNavbarItemState
  );

  useEffect(() => {
    setActiveNavbarItem(getActiveNavbarItemIdByRoute(router.pathname));
  }, []);

  return (
    <Navbar
      isBordered={AppConfig.navbar.isBordered}
      isCompact={AppConfig.navbar.isCompact}
      variant="floating"
      shouldHideOnScroll={AppConfig.navbar.shouldHideOnScroll}
      maxWidth="lg"
      css={{ margin: 0 }}
    >
      <Navbar.Brand css={{ gap: "$4" }}>
        <Navbar.Toggle showIn="xs" />
        <NextLink href="/">
          <div
            className={styles.brandImageWrapper}
            onClick={() => {
              setActiveNavbarItem("HOME");
            }}
          >
            <Image
              src="/favicon.png"
              alt={AppConfig.info.name}
              width={AppConfig.brand.imageWidth}
              height={AppConfig.brand.imageHeight}
            />
          </div>
        </NextLink>
        <NextLink href="/">
          <div
            className={clsx(styles.brandTextWrapper, "fontCursive")}
            onClick={() => {
              setActiveNavbarItem("HOME");
            }}
          >
            <Text b size="$lg">
              {AppConfig.info.name}
            </Text>
          </div>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content variant="highlight" enableCursorHighlight hideIn="xs">
        {AppConfig.navbar.items.map((routerItem: RouterType) => {
          return (
            <NextLink href={routerItem.to} key={routerItem.name}>
              <Navbar.Link
                isActive={activeNavbarItem === routerItem.id}
                onClick={() => {
                  setActiveNavbarItem(routerItem.id);
                }}
              >
                {routerItem.name}
              </Navbar.Link>
            </NextLink>
          );
        })}
      </Navbar.Content>
      <Navbar.Collapse>
        {AppConfig.navbar.items.map((routerItem: RouterType) => {
          return (
            <Navbar.CollapseItem key={routerItem.name}>
              <NextLink href={routerItem.to}>
                <Link
                  onClick={() => {
                    setActiveNavbarItem(routerItem.id);
                  }}
                >
                  {routerItem.name}
                </Link>
              </NextLink>
            </Navbar.CollapseItem>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
