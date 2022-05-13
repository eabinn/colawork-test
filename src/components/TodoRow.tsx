import React, { useState } from "react";
import { Stack } from "@mui/material";
import { TodoInput } from "../components/TodoInput";
import { TodoActionButton } from "../components/TodoActionButton";
import { TodoType } from "../contexts/TodoProvider/todo.types";
import { Todo } from "../services/todos/me-service";
import { useTodoState } from "../hooks/useTodoContext";

type TodoRowProps = {
  todo: Todo;
  todoType: TodoType;
  completeTodo: (id: number) => void;
  editTodo: (type: TodoType, id: number, value: string) => void;
  deleteDisabled: boolean;
};

export const TodoRow = ({ todo, todoType, editTodo, completeTodo, deleteDisabled }: TodoRowProps) => {
  const [onEdit, setOnEdit] = useState(true);
  const todoState = useTodoState();

  return (
    <Stack key={todo.id} spacing={1} direction="row">
      <TodoInput
        editInput={editTodo}
        value={todo.value}
        todoType={todoType}
        todoId={todo.id}
        disabled={todoType === "done" ? onEdit : false}
        onEdit={todoType === "done" ? onEdit : false}
      />
      <TodoActionButton
        type="delete"
        onAction={() => todoState.deleteTodo(todoType, todo.id)}
        disabled={todoType === "notDone" ? deleteDisabled : false}
      />

      {todoType === "notDone" ? (
        <TodoActionButton type="complete" onAction={() => completeTodo(todo.id)} />
      ) : onEdit ? (
        <TodoActionButton type="edit" onAction={() => setOnEdit(false)} />
      ) : (
        <TodoActionButton type="complete" onAction={() => setOnEdit(true)} />
      )}
    </Stack>
  );
};
