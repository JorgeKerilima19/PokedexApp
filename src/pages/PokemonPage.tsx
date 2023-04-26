import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<any>({});
  const { id = "1" } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  //Pokemon handlers
  const nextPokemon = () => {
    const nextId = parseInt(id) + 1;
    navigate(`/pokemon/${nextId}`);
  };
  const previousPokemon = () => {
    if (parseInt(id) < 2) {
      return;
    }
    const previousId = parseInt(id) - 1;
    navigate(`/pokemon/${previousId}`);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  return (
    <div>
      PokemonPage {pokemon.name}
      <button onClick={previousPokemon}>previous</button>
      <button onClick={nextPokemon}>Next</button>
    </div>
  );
};
