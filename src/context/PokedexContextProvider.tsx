import { PokedexContext } from "./PokedexContext";
import { useEffect, useState } from "react";

import { useForm } from "../customHooks/useForm";

const baseUrl = "https://pokeapi.co/api/v2/";

export const PokedexContextProvider = ({ children }: any) => {
  //states of API responses
  const [offset, setOffset] = useState(0);
  const [limitedPokemon, setLimitedPokemon] = useState<any>([]);
  const [allPokemon, setAllPokemon] = useState<any>([]);

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

  async function getAllPokemon() {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100000$offset=0`
      );
      const data = await res.json();

      const promises = data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        if (!res.ok) {
          throw new Error("Images did not response properly");
        }
        const data = await res.json();
        return data;
      });

      const results = await Promise.all(promises);

      setAllPokemon(results);
    } catch (err) {
      console.log(err);
    }
  }

  //general Functions

  const capitalizeFirstLetter = (string: string = "No data") => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);

    return capitalized;
  };

  useEffect(() => {
    getLimitedPokemon(50);
  }, []);
  useEffect(() => {
    getAllPokemon();
  }, []);
  return (
    <PokedexContext.Provider
      value={{
        limitedPokemon,
        allPokemon,
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
