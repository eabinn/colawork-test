import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import meService from "../services/todos/me-service";
import { useAuthState } from "./AuthProvider";

type Todo = {
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

export const TodoContext = createContext<TodoContextType | null>(null);

export function useTodoState() {
  const state = useContext(TodoContext);

  if (!state) {
    throw new Error("Cannot find TodoProvider");
  }

  return state;
}

function isTodosMax(todos: Todo[]) {
  return todos.length >= 10;
}

function isTodosMin(todos: Todo[]) {
  return todos.length === 1;
}

function getNotDuplicatedId(ids: number[]) {
  let id = 0;

  while (1) {
    id = Math.floor(Math.random() * 100);

    if (!ids.includes(id)) {
      break;
    }
  }

  return id;
}

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneTodos, setDoneTodos] = useState<Todo[]>([]);
  const [addDisabled, setAddDisabled] = useState(false);
  const [deleteDisabled, setDeleteDisabled] = useState(false);
  const navigate = useNavigate();
  const authState = useAuthState();

  const fetchTodos = async () => {
    try {
      const result = await meService();
      if (result.result["todo-list"]) {
        setTodos(result.result["todo-list"]);
      }
    } catch (err) {
      if (err && typeof err === "object" && "msg" in err) {
        authState.logout();
        navigate("/");
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    setAddDisabled(isTodosMax(todos));
    setDeleteDisabled(isTodosMin(todos));
  }, [todos]);

  const addTodo = () => {
    if (isTodosMax(todos)) {
      return;
    }

    const ids = [...todos.map((todo) => todo.id), ...doneTodos.map((todo) => todo.id)];

    setTodos([...todos, { id: getNotDuplicatedId(ids), value: "" }]);
  };

  const deleteTodo = (type: TodoType, id: number) => {
    if (isTodosMin(todos)) {
      return;
    }

    type === "done" ? setDoneTodos(doneTodos.filter((todo) => todo.id !== id)) : setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id: number) => {
    const doneTodo = todos.find((todo) => todo.id === id);
    if (doneTodo) {
      setDoneTodos([...doneTodos, doneTodo]);
    }

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (type: TodoType, id: number, value: string) => {
    const originalTodos = type === "done" ? doneTodos : todos;
    const index = originalTodos.findIndex((todo) => todo.id === id);
    let editedTodos = [];

    if (index === -1) {
      return;
    }

    if (index) {
      editedTodos = [
        ...originalTodos.slice(0, index),
        { ...originalTodos[index], value },
        ...originalTodos.slice(index + 1, originalTodos.length),
      ];
    } else {
      editedTodos = [{ ...originalTodos[index], value }, ...originalTodos.slice(index + 1, originalTodos.length)];
    }

    type === "done" ? setDoneTodos(editedTodos) : setTodos(editedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, doneTodos, addTodo, deleteTodo, completeTodo, addDisabled, deleteDisabled, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
