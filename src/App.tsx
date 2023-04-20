import { Navbar } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PokemonPage, SearchPage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/searchPokemon" element={<SearchPage />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
