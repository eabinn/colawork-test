import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: "0 16px",
  fontWeight: "700",
  lineHeight: "36px",
  letterSpacing: "0.0892857em",
  borderRadius: "6px",
}));

type TodoActionButtonProps = {
  type: "delete" | "edit" | "complete";
  onAction: () => void;
  disabled?: boolean;
};

export const TodoActionButton = ({ type, onAction, disabled }: TodoActionButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    onAction();
  };

  return (
    <StyledButton
      color={type === "delete" ? "error" : type === "complete" ? "primary" : "info"}
      variant={type === "complete" ? "contained" : "text"}
      onClick={handleClick}
      disabled={disabled}
    >
      {type === "complete" ? "완료" : type === "delete" ? "삭제" : "수정"}
    </StyledButton>
  );
};
