import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const TitleTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "1.5",
  fontWeight: "600",
  marginBottom: "32px",
  color: "#131924",
}));
