import React from "react";
import List from "../Base/List";
import ListItem from "../Base/ListItem";
import Link from "../Base/Link";

const BookList = ({ books }) => {
  return (
    <List>
      {books &&
        books.map((book) => {
          const slug = `/books/${book.id}`;
          return (
            <ListItem key={book.id}>
              <Link to={slug}>{book.title}</Link>
            </ListItem>
          );
        })}
    </List>
  );
};

export default BookList;
