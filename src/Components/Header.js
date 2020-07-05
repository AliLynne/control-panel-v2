/** @jsx jsx */
import { Box, Flex, Button, Heading, useColorMode, jsx } from "theme-ui";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <Box p={4}>
        <Flex
          sx={{
            alignItems: "center",
          }}
        >
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
      </Box>
    </header>
  );
};

export default Header;
