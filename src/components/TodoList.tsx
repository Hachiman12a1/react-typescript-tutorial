import React from "react";
import { Todo } from "../Type/model";
import "./style.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
