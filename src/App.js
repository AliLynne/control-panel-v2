/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Books from "./Components/Books/Books";

const App = () => {
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <main sx={{ width: "100%", flex: "1 1 auto" }}>
        <Books />
      </main>

      <Footer />
    </Flex>
  );
};

export default App;
