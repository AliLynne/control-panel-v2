/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

const ListItem = ({ children }) => {
  return (
    <Flex as="li" sx={{ alignItems: "center" }}>
      {children}
    </Flex>
  );
};

export default ListItem;
