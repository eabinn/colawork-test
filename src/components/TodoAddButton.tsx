import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CircleIconButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "40px",
  height: "40px",
  minWidth: "40px",
  padding: "0",
  borderRadius: "56px",
  fontSize: "18px",
}));

type TodoAddButtonProps = {
  disabled: boolean;
  addTodo: () => void;
};

export const TodoAddButton = ({ disabled, addTodo }: TodoAddButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addTodo();
  };

  return (
    <CircleIconButton disabled={disabled} aria-label="delete" variant="contained" onClick={handleClick}>
      +
    </CircleIconButton>
  );
};
