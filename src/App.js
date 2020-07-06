/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Book from "./Components/Books/Book";
import Books from "./Components/Books/Books";
import Home from "./Components/Home";

const App = () => {
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Header title="Control Panel" />

      <main sx={{ width: "100%", flex: "1 1 auto" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books/:id" component={Book} />
            <Route path="/books" component={Books} />
          </Switch>
        </Router>
      </main>

      <Footer />
    </Flex>
  );
};

export default App;
