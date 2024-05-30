import { Box, Container } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Rate from "./pages/Rate";

function App() {
  return (
    <Container>
      <Box>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/Rate">Mes films préférés</NavLink>
          </li>
        </ul>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
