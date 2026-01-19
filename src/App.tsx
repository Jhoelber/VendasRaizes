import { Routes, Route } from "react-router-dom"; // ou "react-router-dom"

import { Vendas } from "./components/Vendas";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Vendas />} />
    </Routes>
  );
}
