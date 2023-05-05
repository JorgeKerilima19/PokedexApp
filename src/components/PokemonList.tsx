import { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import { CardPokemon } from "./CardPokemon";

export const PokemonList = () => {
  const { limitedPokemon, filteredPokemon } = useContext(PokedexContext);

  return (
    <div className="homepage__pokemon-container">
      <>
        {filteredPokemon.length ? (
          <>
            {filteredPokemon.map((pokemon, index) => (
              <CardPokemon pokemon={pokemon} key={index} />
            ))}
          </>
        ) : (
          <>
            {limitedPokemon.map((pokemon, index) => (
              <CardPokemon pokemon={pokemon} key={index} />
            ))}
          </>
        )}
      </>
    </div>
  );
};
