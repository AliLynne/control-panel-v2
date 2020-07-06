/** @jsx jsx */
import { Box, jsx } from "theme-ui";

const List = ({ children }) => {
  return (
    <Box as="ul" sx={{ listStyle: "none" }}>
      {children}
    </Box>
  );
};

export default List;
