import React from "react";
import { Box } from "theme-ui";

const Footer = () => {
  return <Box as="footer">&copy; {new Date().getUTCFullYear()} AliLynne </Box>;
};

export default Footer;
