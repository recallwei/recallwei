import { useEffect, useState } from "react";
import { Navbar, Text, Link, Button, Image } from "@nextui-org/react";

import { AppConfig } from "@constants";

export default function (): JSX.Element {
  return (
    <Navbar
      isBordered
      variant="floating"
      shouldHideOnScroll={AppConfig.navbar.shouldHideOnScroll}
    >
      <Navbar.Brand css={{ gap: "$4" }}>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Image
          src="/favicon.png"
          alt={AppConfig.info.name}
          width={AppConfig.brand.imageWidth}
          height={AppConfig.brand.imageHeight}
          showSkeleton={AppConfig.brand.showSkeleton}
        />
        <Text b size="$lg" hideIn="xs" css={{ fontFamily: "$cursive" }}>
          {AppConfig.info.name}
        </Text>
      </Navbar.Brand>
      <Navbar.Content variant="highlight" enableCursorHighlight>
        <Navbar.Link isActive href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Wiki</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">DownLoad Files</Navbar.Link>
        <Navbar.Link href="#">Code Snippets</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link href="#">Wiki</Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
