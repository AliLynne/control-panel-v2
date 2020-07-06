import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setBooks] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://us-central1-control-panel-efe71.cloudfunctions.net/app/api/v1/todos"
        );

        const todos = await response.json();
        setBooks(todos);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
