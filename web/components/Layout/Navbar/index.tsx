import { Navbar, Text, Link, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

import { AppConfig, BuiltInRouters } from "@constants";
import type { RouterType } from "@interfaces";

export default function (): JSX.Element {
  const router = useRouter();

  return (
    <Navbar
      isBordered
      variant="floating"
      shouldHideOnScroll={AppConfig.navbar.shouldHideOnScroll}
    >
      <Navbar.Brand css={{ gap: "$4" }}>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Image
          src="/favicon.png"
          alt={AppConfig.info.name}
          width={AppConfig.brand.imageWidth}
          height={AppConfig.brand.imageHeight}
          showSkeleton={AppConfig.brand.showSkeleton}
        />
        <Text b size="$lg" css={{ fontFamily: "$cursive" }}>
          {AppConfig.info.name}
        </Text>
      </Navbar.Brand>
      <Navbar.Content variant="highlight" enableCursorHighlight hideIn="xs">
        {BuiltInRouters.map((routerItem: RouterType) => {
          return (
            <Navbar.Link
              isActive={router.pathname === routerItem.to}
              href={routerItem.to}
              key={routerItem.name}
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
