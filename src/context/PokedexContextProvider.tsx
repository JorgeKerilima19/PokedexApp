import { PokedexContext } from "./PokedexContext";

export const PokedexContextProvider = ({ children }: any) => {
  const a = 12;
  return (
    <PokedexContext.Provider
      value={{
        a: a,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
