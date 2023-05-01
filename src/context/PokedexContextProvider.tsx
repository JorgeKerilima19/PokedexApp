import { PokedexContext } from "./PokedexContext";
import { useEffect, useState } from "react";

import { useForm } from "../customHooks/useForm";

const baseUrl = "https://pokeapi.co/api/v2/";

export const PokedexContextProvider = ({ children }: any) => {
  //states of API responses
  const [offset, setOffset] = useState(0);
  const [limitedPokemon, setLimitedPokemon] = useState<any>([]);

  //custom hood states

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const getLimitedPokemon = async (limit: number) => {
    const res = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return data;
    });

    const results = await Promise.all(promises);

    setLimitedPokemon([...limitedPokemon, ...results]);
  };

  //general Functions

  const capitalizeFirstLetter = (string: string = "No data") => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);

    return capitalized;
  };

  useEffect(() => {
    getLimitedPokemon(50);
  }, []);

  return (
    <PokedexContext.Provider
      value={{
        limitedPokemon,
        capitalizeFirstLetter,
        valueSearch,
        onInputChange,
        onResetForm,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
