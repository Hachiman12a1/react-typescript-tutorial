import React, { useRef } from "react";
import "./style.css";

interface Props {
  todoSearch: string;
  setTodoSearch: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  todoSearch,
  setTodoSearch,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef?.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todoSearch}
        onChange={(e) => setTodoSearch(e.target.value)}
      />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
