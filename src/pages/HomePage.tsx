import { useContext } from "react";
import { PokemonList } from "../components";
import "../styles/homepage.css";

export const HomePage = () => {
  return (
    <section className="homepage container">
      <PokemonList />
    </section>
  );
};
