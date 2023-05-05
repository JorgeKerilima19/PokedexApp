import { PokemonList } from "../components";
import { useContext } from "react";

import { PokedexContext } from "../context/PokedexContext";
import { FilterBar } from "../components/FilterBar";

import "../styles/homepage.css";

export const HomePage = () => {
  const { getMorePokemon } = useContext(PokedexContext);

  return (
    <section className="homepage container">
      <FilterBar />
      <PokemonList />
      <div className="load-more-container">
        <button onClick={getMorePokemon} className="load-more">
          Load More
        </button>
      </div>
    </section>
  );
};
