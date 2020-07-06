import React from "react";
import { Box } from "theme-ui";
import Link from "./Base/Link";
import List from "./Base/List";
import ListItem from "./Base/ListItem";

const Home = () => {
  return (
    <Box>
      <List>
        <ListItem>
          <Link to="/books">Books</Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link to="/todos">Todos</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Home;
