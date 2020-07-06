import React from "react";
import List from "../Base/List";
import ListItem from "../Base/ListItem";

const TodoList = ({ todos }) => {
  return (
    <List>
      {todos &&
        todos.map((todo) => {
          return <ListItem key={todo.id}>{todo.todo}</ListItem>;
        })}
    </List>
  );
};

export default TodoList;
