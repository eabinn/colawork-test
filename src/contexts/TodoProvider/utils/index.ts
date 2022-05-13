import { Todo } from "../todo.types";

export function isTodosMax(todos: Todo[]) {
  return todos.length >= 10;
}

export function isTodosMin(todos: Todo[]) {
  return todos.length === 1;
}
