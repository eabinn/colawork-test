import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, FormControl, FormHelperText } from "@mui/material";
import { TitleTypography } from "../components/TitleTypography";
import { LoginTextField } from "../components/LoginTextField";
import { LoginButton } from "../components/LoginButton";
import { useAuthState } from "../hooks/useAuthContext";

type LoginFormType = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const [form, setForm] = useState<LoginFormType>({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");
  const authState = useAuthState();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const target = e.target.id as keyof LoginFormType;
    const value = e.target.value;

    emailError && target === "email" && setEmailError("");
    pwError && target === "password" && setPwError("");
    authState.authErrorMsg && authState.resetAuthErrorMsg();

    setForm({
      ...form,
      [target]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      !form.email && setEmailError("이메일을 입력해주세요.");
      !form.password && setPwError("비밀번호를 입력해주세요.");

      return;
    }
    try {
      await authState.login({ user_id: form.email, user_pw: form.password });
      navigate("/list");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Container>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        >
          <FormControl sx={{ maxWidth: "370px", margin: "0 auto", width: "100%" }}>
            <TitleTypography>Todo</TitleTypography>
            <Box sx={{ marginBottom: "64px" }}>
              <LoginTextField id="email" label="이메일" variant="filled" onChange={handleInputChange} error={!!emailError} />
              <FormHelperText error={true}>{emailError}</FormHelperText>
            </Box>
            <Box sx={{ marginBottom: "48px" }}>
              <LoginTextField
                id="password"
                type="password"
                label="비밀번호"
                variant="filled"
                onChange={handleInputChange}
                error={!!pwError}
              />
              <FormHelperText error={true}>{pwError}</FormHelperText>
            </Box>
            <Box>
              <LoginButton type="submit" variant="contained">
                로그인
              </LoginButton>
              <FormHelperText error={true}>{authState.authErrorMsg}</FormHelperText>
            </Box>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};
