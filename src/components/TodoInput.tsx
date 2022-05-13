import Input, { InputProps } from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { TodoType } from "../contexts/TodoProvider/todo.types";

interface StyledInputProps extends InputProps {
  done?: boolean;
}

interface TodoInputProps extends StyledInputProps {
  editInput: (type: TodoType, id: number, value: string) => void;
  onEdit?: boolean;
  value: string;
  todoId: number;
  todoType: TodoType;
}

export const StyledInput = styled(Input, {
  shouldForwardProp: (prop) => prop !== "done",
})<StyledInputProps>(({ theme }) => ({
  padding: "9px 12px 8px",
  borderRadius: "8px",
  lineHeight: "22px",
  flex: 1,
  backgroundColor: theme.palette.common.white,
}));

export const TodoInput = ({ editInput, value, todoId, todoType, onEdit }: TodoInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(e.target.value);
    editInput(todoType, todoId, e.target.value);
  };

  return (
    <StyledInput
      disabled={todoType === "done" ? onEdit : false}
      disableUnderline
      placeholder="To do.."
      onChange={handleInputChange}
      value={value}
      sx={todoType === "done" && onEdit ? { backgroundColor: "#DBE2EF" } : {}}
    />
  );
};
