import React from "react";
import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TodoBox } from "../components/TodoBox";
import { useTodoState } from "../hooks/useTodoContext";

export const Todos: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const todoState = useTodoState();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: matches ? 0 : "80px 0",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", flexDirection: matches ? "row" : "column", gap: matches ? 0 : "30px" }}>
          <TodoBox todoType="notDone" todoState={todoState} />
          <TodoBox todoType="done" todoState={todoState} />
        </Box>
      </Container>
    </Box>
  );
};
