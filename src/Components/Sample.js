/** @jsx jsx */
import { Fragment } from "react";
import { Box, Flex, Button, Heading, useColorMode, jsx } from "theme-ui";

const Sample = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    // using full Fragment component because <></> caused an error with sx
    <Fragment>
      <Box p={4} bg="highlight">
        <Flex
          sx={{
            alignItems: "center",
          }}
        >
          <Heading as="h1">Components</Heading>
          <Button
            onClick={(e) => {
              setColorMode(colorMode === "default" ? "dark" : "default");
            }}
            ml="auto"
          >
            Toggle {colorMode === "default" ? "Dark" : "Light"}
          </Button>
        </Flex>
      </Box>
      <Box p={3}>
        <Flex
          sx={{
            alignItems: "center",
          }}
        >
          <ul sx={{ listStyle: "none" }}>
            <li>
              <Heading as="h1">Heading Style H1</Heading>
            </li>
            <li>
              <Heading>Heading Style H2 (default)</Heading>
            </li>
            <li>
              <Heading as="h3">Heading Style H3</Heading>
            </li>
            <li>
              <Heading as="h4">Heading Style H4</Heading>
            </li>
            <li>
              <Heading as="h5">Heading Style H5</Heading>
            </li>
            <li>
              <Heading as="h6">Heading Style H6</Heading>
            </li>
          </ul>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Sample;
