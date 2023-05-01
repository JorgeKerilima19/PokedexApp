import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

import { CardPokemon } from "../components/CardPokemon";

import "../styles/searchPage.css"

export const SearchPage = () => {
  const { limitedPokemon } = useContext(PokedexContext);
  const location = useLocation();

  const searchedPokemon = limitedPokemon.filter((pokemon: any) =>
    pokemon.name.includes(location.state?.toLowerCase())
  );

  return (
    <>
      <div>
        <p>
          <span>{searchedPokemon.length}</span> results founded
        </p>
      </div>
      <div className="pokedex__pokemon-container">
        {searchedPokemon.map((pokemon: any) => {
          return <CardPokemon pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};
