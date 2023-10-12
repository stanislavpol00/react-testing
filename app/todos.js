import React, { useState ,useEffect} from "react";
import Todo from "./todo";
import AddTodo from "./add-todo";
// import shortid from "shortid";

import { toggleDone, addTodo, deleteTodo } from "./state-functions";
import { getTodosTask } from "./fetch.api";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodosTask();
      setTodos(data);
    };
    fetchData();
  }, []);

  const onToggleDone = (id) => {
    setTodos(toggleDone(todos, id));
  };

  const onAddTodo = (todo) => {
    setTodos(addTodo(todos, todo));
  };

  const onDeleteTodo = (id) => {
    setTodos(deleteTodo(todos, id));
  };

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo
            todo={todo}
            doneChange={(id) => onToggleDone(id)}
            deleteTodo={(id) => onDeleteTodo(id)}
          />
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Things to get done:</h1>
      <ul className="todos-list">{renderTodos()}</ul>
      <AddTodo onNewTodo={(todo) => onAddTodo(todo)} />
    </div>
  );
}
