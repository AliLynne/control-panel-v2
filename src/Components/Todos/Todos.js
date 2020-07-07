import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleComplete = async (id) => {
    const data = {
      date: Date.now(),
    };
    console.log(data);
    try {
      const response = await fetch(
        `https://us-central1-control-panel-efe71.cloudfunctions.net/app/api/v1/todos/${id}/completed`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      return "completed!";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://us-central1-control-panel-efe71.cloudfunctions.net/app/api/v1/todos"
        );

        const todos = await response.json();
        setTodos(todos);
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
      <TodoList todos={todos} handleComplete={handleComplete} />
    </>
  );
};

export default Todos;
