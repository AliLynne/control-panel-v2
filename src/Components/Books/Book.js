/** @jsx jsx */
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Flex, Heading, Text, jsx } from "theme-ui";
import List from "../Base/List";
import ListItem from "../Base/ListItem";

const Book = () => {
  let { id } = useParams();
  const [book, setBook] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const URL = `https://us-central1-control-panel-efe71.cloudfunctions.net/app/api/v1/books/${id}`;
        const response = await fetch(URL);

        const book = await response.json();
        console.log(book);
        setBook(book);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);
  return (
    <Flex sx={{ flexDirection: "column", alignItems: "center" }} p={4}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {book && (
        <Fragment>
          <Heading p={2}>{book.title}</Heading>
          <Heading as="h3" p={2}>
            {book.author}
          </Heading>
          <List>
            {book.quotes.map((quote) => {
              return (
                <ListItem key={quote.id}>
                  <Text>{quote.quote}</Text>
                  <Text>{quote.location}</Text>
                </ListItem>
              );
            })}
          </List>
        </Fragment>
      )}
    </Flex>
  );
};

export default Book;
