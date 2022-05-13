import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TitleTypography } from "../components/TitleTypography";
import { TodoContextType, TodoType } from "../contexts/TodoProvider";
import { TodoRow } from "../components/TodoRow";
import { TodoAddButton } from "./TodoAddButton";

type TodoBoxProps = {
  todoType: TodoType;
  todoState: TodoContextType;
};

export const TodoBox = ({ todoType, todoState }: TodoBoxProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ maxWidth: matches ? "370px" : "100%", width: "100%" }}>
      <TitleTypography sx={{ color: todoType === "done" ? "#0053F4" : "inherit" }}>
        {todoType === "done" ? "Done" : "Todo"}{" "}
      </TitleTypography>
      <Stack direction="column" spacing={4} sx={{ marginBottom: "24px" }}>
        {(todoType === "done" ? todoState.doneTodos : todoState.todos).map((todo) => (
          <TodoRow
            key={todo.id}
            todo={todo}
            todoType={todoType}
            editTodo={todoState.editTodo}
            completeTodo={todoState.completeTodo}
            deleteDisabled={todoState.deleteDisabled}
          />
        ))}
      </Stack>
      {todoType === "notDone" && <TodoAddButton addTodo={todoState.addTodo} disabled={todoState.addDisabled} />}
    </Box>
  );
};
