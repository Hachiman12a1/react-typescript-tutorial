import React, { useState, useRef, useEffect } from "react";
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
  const [editTodo, setEditTodo] = useState({
    isEdit: false,
    todo: todo.todo,
  });

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo.todo } : todo
      )
    );
    setEditTodo({
      ...editTodo,
      isEdit: false,
    });
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editTodo.isEdit]);

  return (
    <form className="todo_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {editTodo.isEdit ? (
        <input
          ref={inputRef}
          value={editTodo.todo}
          onChange={(e) => setEditTodo({ ...editTodo, todo: e.target.value })}
          className="todo_single-text"
        />
      ) : todo.isDone ? (
        <s className="todo_single-text">{todo.todo}</s>
      ) : (
        <span className="todo_single-text">{todo.todo}</span>
      )}
      <div>
        <span
          className="todo_icon"
          onClick={() => {
            if (!editTodo.isEdit && !todo.isDone) {
              setEditTodo({ ...editTodo, isEdit: !editTodo.isEdit });
            }
          }}
        >
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
