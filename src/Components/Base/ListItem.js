/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

const ListItem = ({ children }) => {
  return (
    <Flex as="li" p={3} sx={{ alignItems: "center" }}>
      {children}
    </Flex>
  );
};

export default ListItem;
