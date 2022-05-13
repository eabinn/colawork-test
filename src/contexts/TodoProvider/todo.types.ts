export type Todo = {
  id: number;
  value: string;
};

export type TodoType = "notDone" | "done";

export type TodoContextType = {
  todos: Todo[];
  doneTodos: Todo[];
  addTodo: () => void;
  completeTodo: (id: number) => void;
  editTodo: (type: TodoType, id: number, value: string) => void;
  deleteTodo: (type: TodoType, id: number) => void;
  addDisabled: boolean;
  deleteDisabled: boolean;
};
