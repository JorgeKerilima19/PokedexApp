import { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

export const PokemonList = () => {
  const { limitedPokemon } = useContext(PokedexContext);

  return (
    <div className="homepage__pokemon-container">
      {limitedPokemon.map((pokemon:any) => (
        <article key={pokemon.id} className="pokemon-card__small">
          <img src="" alt="No Loaded" />
          <div className="pokemon-card__small-description">
            <h4>Pokemon Name{pokemon.id}</h4>
            <div className="pokemon-card__small-description__types">
              <span>Type1</span>
              <span>Type2</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
