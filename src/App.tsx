import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./Type/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todoSearch, setTodoSearch] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoSearch) {
      setTodos([...todos, { id: Date.now(), todo: todoSearch, isDone: false }]);
      setTodoSearch("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todoSearch={todoSearch}
        setTodoSearch={setTodoSearch}
        handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
