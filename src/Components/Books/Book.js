import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        setBook(book);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);
  return <div>{book && <p>{book.title}</p>}</div>;
};

export default Book;
