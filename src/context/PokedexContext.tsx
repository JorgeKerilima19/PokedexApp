import { createContext } from "react";

interface pokedexContext {
  limitedPokemon: any;
  capitalizeFirstLetter: (pokemon: string) => string;
  valueSearch: any;
  onInputChange: any;
  onResetForm: any;
}

export const PokedexContext = createContext<pokedexContext>(
  {} as pokedexContext
);
