import React from "react";
import { Badge, Button, Text, jsx } from "theme-ui";
import Link from "../Base/Link";
import List from "../Base/List";
import ListItem from "../Base/ListItem";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <List>
      {todos &&
        todos.map((todo) => {
          return (
            <ListItem key={todo.id}>
              <Text>{todo.todo}</Text>
              <Button
                onClick={() => handleComplete(todo.id)}
                variant="outline"
                m={2}
              >
                Complete
              </Button>
              <Link to={`/todos/${todo.id}`}>Edit</Link>
            </ListItem>
          );
        })}
    </List>
  );
};

export default TodoList;
