import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const LoginButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "100%",
  padding: "14px 16px",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "36px",
  letterSpacing: "0.0892857em",
  borderRadius: "12px",
}));
