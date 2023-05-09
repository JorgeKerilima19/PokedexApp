import { PokedexContext } from "./PokedexContext";
import { useEffect, useState, ChangeEvent } from "react";

import { useForm } from "../customHooks/useForm";

const baseUrl = "https://pokeapi.co/api/v2/";

export const PokedexContextProvider = ({ children }: any) => {
  //states of API responses
  const [offset, setOffset] = useState(0);
  const [limitedPokemon, setLimitedPokemon] = useState<any>([]);
  const [allPokemon, setAllPokemon] = useState<any>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
  const [typeSelected, setTypeSelected] = useState({
    bug: false,
    dark: false,
    dragon: false,
    electric: false,
    fairy: false,
    fire: false,
    flying: false,
    fighting: false,
    ghost: false,
    grass: false,
    ground: false,
    ice: false,
    normal: false,
    poison: false,
    psychic: false,
    rock: false,
    steel: false,
    water: false,
  });

  //custom hood states

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  // fetching pokemon
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
        `https://pokeapi.co/api/v2/pokemon?limit=905$offset=0`
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
  function getMorePokemon() {
    setOffset(offset + 50);
  }

  //general Functions

  const capitalizeFirstLetter = (string: string = "No data") => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);

    return capitalized;
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //Filter types bar function

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    setTypeSelected({ ...typeSelected, [e.target.name]: e.target.checked });
    if (e.target.checked) {
      const filteredResults = allPokemon.filter((pokemon: any) =>
        pokemon.types.map((type: any) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemon([...filteredPokemon, ...filteredResults]);
    } else {
      const filteredResults = filteredPokemon.filter(
        (pokemon) =>
          !pokemon.types
            .map((type: any) => type.type.name)
            .includes(e.target.name)
      );
      setFilteredPokemon([...filteredResults]);
    }
  };

  useEffect(() => {
    getLimitedPokemon(50);
  }, [offset]);
  useEffect(() => {
    getAllPokemon();
  }, []);
  return (
    <PokedexContext.Provider
      value={{
        limitedPokemon,
        allPokemon,
        filteredPokemon,
        getMorePokemon,
        capitalizeFirstLetter,
        scrollUp,
        valueSearch,
        onInputChange,
        onResetForm,
        handleCheckbox,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
