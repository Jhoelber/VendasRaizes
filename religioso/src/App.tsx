import { Routes, Route } from "react-router"; // ou "react-router-dom"
import { PaginaPrincipal } from "./components/PaginaPrincipal";
import { Questionario } from "./components/Questionario";
import { Vendas } from "./components/Vendas";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/questionario" element={<Questionario />} />
      <Route path="/vendas" element={<Vendas />} />
    </Routes>
  );
}
