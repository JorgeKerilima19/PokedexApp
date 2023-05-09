import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PokedexContext } from "../context/PokedexContext";

type Props = {
  element: any;
  children: React.ReactNode;
};

export const EvolutionCard = ({ element, children }: Props) => {
  const { capitalizeFirstLetter, scrollUp } = useContext(PokedexContext);
  const [pokemon, setPokemon] = useState<any>();

  const getPokemon = async (id: string | number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon(element);
  }, []);

  return (
    <>
      <Link
        className="evolution-container__card"
        onClick={scrollUp}
        to={`/pokemon/${pokemon?.id}`}
      >
        <img
          src={pokemon?.sprites?.other["official-artwork"]?.front_default}
          alt=""
          className="evolution-image"
        />
        <span className="evolution-name">
          {capitalizeFirstLetter(pokemon?.name)}
        </span>
      </Link>
      <div>{children}</div>
    </>
  );
};
