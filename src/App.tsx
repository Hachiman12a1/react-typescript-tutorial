import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./Helper/model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todoSearch, setTodoSearch] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoSearch) {
      setTodos([...todos, { id: Date.now(), todo: todoSearch, isDone: false }]);
      setTodoSearch("");
    }
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // Move to Incorrect Destination Or Don't move Todo Item
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    //

    let dragTodo,
      activated = todos,
      completed = completedTodos;

    // Source Todo
    if (source.droppableId === "todoList") {
      dragTodo = activated[source.index];
      activated.splice(source.index, 1);
    } else {
      dragTodo = completed[source.index];
      completed.splice(source.index, 1);
    }

    // Destination Todo
    if (destination.droppableId === "todoList") {
      activated.splice(destination.index, 0, dragTodo);
    } else {
      completed.splice(destination.index, 0, dragTodo);
    }

    setTodos(activated);
    setCompletedTodos(completed);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField
          todoSearch={todoSearch}
          setTodoSearch={setTodoSearch}
          handleAdd={handleAdd}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setCompletedTodos={setCompletedTodos}
          completedTodos={completedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
