import { createContext } from "react";

interface pokedexContext {
  limitedPokemon: any;
}

export const PokedexContext = createContext<pokedexContext>(
  {} as pokedexContext
);
