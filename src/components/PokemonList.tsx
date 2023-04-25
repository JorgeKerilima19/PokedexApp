import { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import { CardPokemon } from "./CardPokemon";

export const PokemonList = () => {
  const { limitedPokemon } = useContext(PokedexContext);
  console.log(limitedPokemon);

  return (
    <div className="homepage__pokemon-container">
      {limitedPokemon.map((pokemon: any, index:number) => (
        <CardPokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};
