import React from "react";
import { Todo } from "../Type/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const handleDoneTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todo_single">
      {todo.isDone ? (
        <s className="todo_single-text">{todo.todo}</s>
      ) : (
        <span className="todo_single-text">{todo.todo}</span>
      )}
      <div>
        <span className="todo_icon">
          <AiFillEdit />
        </span>
        <span className="todo_icon">
          <AiFillDelete onClick={() => handleDeleteTodo(todo.id)} />
        </span>
        <span className="todo_icon" onClick={() => handleDoneTodo(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
