import React from "react";
import { Todo } from "../Type/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
  key: number;
}

const SingleTodo: React.FC<Props> = ({ todo, key, setTodos, todos }) => {
  return (
    <form className="todo_single">
      <span className="todo_single-text">{todo.todo}</span>
      <div>
        <span className="todo_icon">
          <AiFillEdit />
        </span>
        <span className="todo_icon">
          <AiFillDelete />
        </span>
        <span className="todo_icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
