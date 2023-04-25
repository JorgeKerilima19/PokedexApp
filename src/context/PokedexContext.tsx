import { createContext } from "react";

interface pokedexContext {
  limitedPokemon: any;
  capitalizeFirstLetter: (pokemon:string) => string;
}

export const PokedexContext = createContext<pokedexContext>(
  {} as pokedexContext
);
