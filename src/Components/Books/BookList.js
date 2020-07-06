import React from "react";
import List from "../Base/List";
import ListItem from "../Base/ListItem";

const BookList = ({ books }) => {
  return (
    <List>
      {books &&
        books.map((book) => {
          return <ListItem key={book.id}>{book.title}</ListItem>;
        })}
    </List>
  );
};

export default BookList;
