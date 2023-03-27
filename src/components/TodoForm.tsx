import { FunctionalComponent } from "preact";
import { StateUpdater, useState } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import { TodoType } from "../types";

type Props = {
  todos: TodoType[];
  setTodos: StateUpdater<TodoType[]>;
};
export const TodoForm: FunctionalComponent<Props> = ({ todos, setTodos }) => {
  const [inputText, setInputText] = useState("");

  const handleChangeInputText = (
    e: JSXInternal.TargetedEvent<HTMLInputElement, Event>
  ) => {
    setInputText(e.currentTarget.value);
  };

  const handleSubmit = (
    e: JSXInternal.TargetedEvent<HTMLFormElement, Event>
  ) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length, content: inputText, isDone: false },
    ]);
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={handleChangeInputText} />
    </form>
  );
};
