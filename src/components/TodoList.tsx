import { FunctionalComponent } from "preact";
import { StateUpdater } from "preact/hooks";
import { TodoType } from "../types";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

type Props = {
  todos: TodoType[];
  setTodos: StateUpdater<TodoType[]>;
};
export const TodoList: FunctionalComponent<Props> = ({ todos, setTodos }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li>
          <TodoItem todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
};
