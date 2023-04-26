import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokedexContext } from "../context/PokedexContext";

export const CardPokemon = ({ pokemon }: any) => {
  const { capitalizeFirstLetter } = useContext(PokedexContext);

  return (
    <Link className="pokemon-card" to={`/pokemon/${pokemon.id}`}>
      <div className="pokemon-card__img-container">
        <div className="pokemon-card__background">
          <div className="background-button">
            <span className="background-button__small"></span>
          </div>
        </div>
        <img
          src={pokemon?.sprites?.other["official-artwork"].front_default}
          alt={`Pokemon ${pokemon.name}`}
          className="pokemon-card__img"
        />
      </div>
      <div className="pokemon-card__info">
        <strong>{`N° ${pokemon.id}`}</strong>
        <h3 className="pokemon-card__info__name">
          {capitalizeFirstLetter(pokemon.name)}
        </h3>
        <div className="pokemon-card__info__types">
          {pokemon.types.map((type: any) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
