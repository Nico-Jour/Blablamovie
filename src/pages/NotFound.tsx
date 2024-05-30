import { Box, Container, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          404 - Not Found
        </Typography>
        <NavLink to="/">Home</NavLink>
        <Copyright />
      </Box>
    </Container>
  );
}
