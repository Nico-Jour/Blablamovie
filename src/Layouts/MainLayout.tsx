import { Box, Container } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";
import Rate from "../pages/Rate";

export default function MainLayout() {
  return (
    <Container>
      <Box display={"flex"} justifyContent={"flex-start"} gap={4} mb={4}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Rate">My favorite movies</NavLink>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
