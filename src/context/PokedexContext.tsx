import { createContext } from "react";

interface pokedexContext {
  a: number;
}

export const PokedexContext = createContext<pokedexContext>(
  {} as pokedexContext
);
