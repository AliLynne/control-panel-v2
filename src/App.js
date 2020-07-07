/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Book from "./Components/Books/Book";
import Books from "./Components/Books/Books";
import Home from "./Components/Home";
import Todos from "./Components/Todos/Todos";
import Todo from "./Components/Todos/Todo";

const App = () => {
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <main sx={{ width: "100%", flex: "1 1 auto" }}>
        <Router>
          <Header title="Control Panel" />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books/:id" component={Book} />
            <Route path="/books" component={Books} />
            <Route path="/todos/:id" component={Todo} />
            <Route path="/todos" component={Todos} />
          </Switch>
        </Router>
      </main>

      <Footer />
    </Flex>
  );
};

export default App;
