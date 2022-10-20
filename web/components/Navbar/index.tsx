import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import { useRecoilState } from "recoil";
import { Navbar, Text, Link } from "@nextui-org/react";
import clsx from "clsx";
import styles from "./index.module.sass";

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
      isBordered={AppConfig.navbar.isBordered}
      isCompact={AppConfig.navbar.isCompact}
      variant="floating"
      shouldHideOnScroll={AppConfig.navbar.shouldHideOnScroll}
      maxWidth="lg"
    >
      <Navbar.Brand css={{ gap: "$4" }}>
        <Navbar.Toggle showIn="xs" className={styles.brandHoverLink} />
        <NextLink href="/">
          <Image
            src="/favicon.png"
            alt={AppConfig.info.name}
            width={AppConfig.brand.imageWidth}
            height={AppConfig.brand.imageHeight}
          />
        </NextLink>
        <NextLink href="/">
          <Text
            b
            size="$lg"
            className={clsx(
              styles.brandText,
              styles.brandHoverLink,
              "fontCursive"
            )}
          >
            {AppConfig.info.name}
          </Text>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content variant="highlight" enableCursorHighlight hideIn="xs">
        {BuiltInRouters.map((routerItem: RouterType) => {
          return (
            <NextLink href={routerItem.to} key={routerItem.name}>
              <Navbar.Link
                isActive={activeNavbarItem === routerItem.name}
                onClick={() => {
                  setActiveNavbarItem(routerItem.name as BuiltInRouter);
                }}
              >
                {routerItem.name}
              </Navbar.Link>
            </NextLink>
          );
        })}
      </Navbar.Content>
      <Navbar.Collapse>
        {BuiltInRouters.map((routerItem: RouterType) => {
          return (
            <Navbar.CollapseItem key={routerItem.name}>
              <NextLink href={routerItem.to}>
                <Link
                  onClick={() => {
                    setActiveNavbarItem(routerItem.name as BuiltInRouter);
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
