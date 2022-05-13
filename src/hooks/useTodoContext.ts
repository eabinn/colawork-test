import { useContext } from "react";
import { TodoContext } from "../contexts/TodoProvider/TodoProvider";

export function useTodoState() {
  const state = useContext(TodoContext);

  if (!state) {
    throw new Error("Cannot find TodoProvider");
  }

  return state;
}
