import { useEffect, useState } from "react";
import { Navbar, Text, Link, Button, Image } from "@nextui-org/react";

import { AppConfig } from "@constants";

export default function (): JSX.Element {
  const [buttonType, setButtonType] = useState<any>(null);

  useEffect(() => {
    setButtonType(Link);
  }, []);

  return (
    <Navbar isBordered variant="floating" shouldHideOnScroll>
      <Navbar.Brand css={{ gap: "$4" }}>
        <Image
          src="/favicon.png"
          alt={AppConfig.name}
          width={AppConfig.brand.imageWidth}
          height={AppConfig.brand.imageHeight}
          showSkeleton={AppConfig.brand.showSkeleton}
        />
        <Text b size="$lg" hideIn="xs">
          {AppConfig.name}
        </Text>
      </Navbar.Brand>
      <Navbar.Content variant="highlight">
        <Navbar.Link isActive href="#">
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="#">Team</Navbar.Link>
        <Navbar.Link href="#">Activity</Navbar.Link>
        <Navbar.Link href="#">Settings</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}
