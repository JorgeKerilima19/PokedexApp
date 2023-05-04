import { PokemonList } from "../components";
import { useContext } from "react";

import "../styles/homepage.css";
import { PokedexContext } from "../context/PokedexContext";

export const HomePage = () => {
  const { getMorePokemon } = useContext(PokedexContext);

  return (
    <section className="homepage container">
      <PokemonList />
      <div className="load-more-container">
        <button onClick={getMorePokemon} className="load-more">
          Load More
        </button>
      </div>
    </section>
  );
};
