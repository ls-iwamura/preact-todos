import { FunctionalComponent } from "preact";
import { StateUpdater } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import { TodoType } from "../types";
import styles from "./TodoItem.module.css";

type Props = {
  todo: TodoType;
  setTodos: StateUpdater<TodoType[]>;
};

export const TodoItem: FunctionalComponent<Props> = ({ todo, setTodos }) => {
  const handleChangeIsDone = (
    e: JSXInternal.TargetedEvent<HTMLInputElement, Event>
  ) => {
    setTodos((todos) =>
      todos.map((elem) => {
        return todo.id !== elem.id ? todo : { ...elem, isDone: !elem.isDone };
      })
    );
  };
  const handleClickDelete = () => {
    setTodos((todos) => todos.filter((elem) => elem.id !== todo.id));
  };

  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleChangeIsDone}
      />
      <p>{todo.content}</p>
      <button className={styles.deleteButton} onClick={handleClickDelete}>x</button>
    </div>
  );
};
