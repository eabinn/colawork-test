import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Container } from "@mui/material";
import logo from "../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <Box>
      <AppBar
        sx={{
          padding: "8px 0",
          boxShadow: "none",
          fontSize: 0,
          backgroundColor: "transparent",
        }}
        color="inherit"
      >
        <Container>
          <Link to="/">
            <Box>
              <img src={logo} alt="Colawork" />
            </Box>
          </Link>
        </Container>
      </AppBar>
    </Box>
  );
};
