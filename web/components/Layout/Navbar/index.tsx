import { useEffect, useState } from "react";
import { Navbar, Text, Link, Image } from "@nextui-org/react";

import { AppConfig, BuiltInRouters } from "@constants";
import type { RouterType } from "@interfaces";

export default function (): JSX.Element {
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
        {BuiltInRouters.map((router: RouterType) => {
          return (
            <Navbar.Link isActive href={router.to} key={router.name}>
              {router.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Content>
      <Navbar.Collapse>
        {BuiltInRouters.map((router: RouterType) => {
          return (
            <Navbar.CollapseItem key={router.name}>
              <Link href={router.to}>{router.name}</Link>
            </Navbar.CollapseItem>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
