import { BrowserRouter, Route, Routes as Router } from "react-router";

import Menu from "../components/Menu";
import DetalhesUsuario from "../pages/DetalhesUsuario";
import Home from "../pages/Home";
import NaoEncontrada from "../pages/NaoEncontrada";
import Usuarios from "../pages/Usuarios";

export function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/:id" element={<DetalhesUsuario />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Router>
    </BrowserRouter>
  );
}
