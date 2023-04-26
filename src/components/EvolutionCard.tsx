import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PokedexContext } from "../context/PokedexContext";

export const EvolutionCard = ({ element }: any) => {
  const { capitalizeFirstLetter } = useContext(PokedexContext);
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  });

  return (
    <Link className="evolution-container__card" to={"/"}>
      <img
        src={pokemon?.sprites?.other["official-artwork"]?.front_default}
        alt=""
        className="evolution-image"
      />
      <span className="evolution-name">
        {capitalizeFirstLetter(pokemon?.name)}
      </span>
    </Link>
  );
};
