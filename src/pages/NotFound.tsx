import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container>
        <Stack spacing={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography align="center" variant="h3">
            404 NOT FOUND
          </Typography>
          <Link to="/list" style={{ textDecoration: "none" }}>
            <Button variant="contained">Todo List로 돌아가기</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};
