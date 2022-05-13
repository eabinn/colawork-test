import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const LoginTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  borderRadius: "8px 8px 0 0",
  width: "100%",
  "& .MuiFilledInput-root.Mui-focused": {
    boxShadow: `0px 12px 24px rgba(0, 83, 244, 0.12)`,
  },
  "& .MuiFilledInput-root": {
    borderColor: "red",
    backgroundColor: theme.palette.common.white,
  },
}));
