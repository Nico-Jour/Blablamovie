import { Box, Container } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";
import FormDialogUser from "../pages/FormDialogUser";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";
import Rate from "../pages/Rate";

export default function MainLayout() {
  return (
    <Container>
      <Box display={"flex"} justifyContent={"space-between"} mb={4}>
        <Box display={"flex"} gap={3}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Rate">My favorite movies</NavLink>
        </Box>
        <FormDialogUser />
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
