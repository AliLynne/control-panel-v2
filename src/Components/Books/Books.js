import React, { useState, useEffect } from "react";

import BookList from "./BookList";

const Books = () => {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://us-central1-control-panel-efe71.cloudfunctions.net/app/api/v1/books"
        );

        const books = await response.json();
        setBooks(books);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <BookList books={books} />
    </>
  );
};

export default Books;
