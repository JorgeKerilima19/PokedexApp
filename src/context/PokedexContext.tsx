import { createContext, ChangeEvent } from "react";

interface pokedexContext {
  limitedPokemon: any[];
  allPokemon: any[];
  filteredPokemon: any[];
  getMorePokemon: any;
  capitalizeFirstLetter: (pokemon: string) => string;
  valueSearch: any;
  onInputChange: any;
  onResetForm: any;
  handleCheckbox: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const PokedexContext = createContext<pokedexContext>(
  {} as pokedexContext
);
