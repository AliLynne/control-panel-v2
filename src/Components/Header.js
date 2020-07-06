/** @jsx jsx */
import { Flex, Button, Heading, useColorMode, jsx } from "theme-ui";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Flex as="header" sx={{ alignItems: "center", width: "100%", p: 3 }}>
      <Heading as="h1">App Title</Heading>
      <Button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
        ml="auto"
      >
        {colorMode === "default" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
};

export default Header;
