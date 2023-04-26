import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokedexContext } from "../context/PokedexContext";

import "../styles/pokemonPage.css";

export const PokemonPage = () => {
  const { capitalizeFirstLetter } = useContext(PokedexContext);
  const [pokemon, setPokemon] = useState<any>({});
  const [pokemonInfo, setPokemonInfo] = useState<any>("");
  const [pokemonDescription, setPokemonDescription] = useState<string>("");

  const { id = "1" } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  //Pokemon handlers
  const nextPokemon = () => {
    const nextId = parseInt(id) + 1;
    navigate(`/pokemon/${nextId}`);
  };
  const previousPokemon = () => {
    if (parseInt(id) < 2) {
      return;
    }
    const previousId = parseInt(id) - 1;
    navigate(`/pokemon/${previousId}`);
  };
  const replaceDescriptionChar = (string: string) => {
    let correctString = string.replace("\f", " ");
    correctString = correctString.replace("POKéMON", "pokemon");
    return correctString;
  };

  //fetching info functions

  const getPokemonInfo = async (id: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonInfo(data);
      });
  };
  const getDescription = async (el: any) => {
    await getPokemonInfo(id);
    const description = pokemonInfo.flavor_text_entries?.find(
      (el: any) => el.language["name"] === "en"
    )?.flavor_text;
    if (description) {
      setPokemonDescription(description);
    }
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
    //Pokemon Description + evolutions
    getPokemonInfo(id);
  }, [id]);

  useEffect(() => {
    getDescription(id);
  }, [pokemonInfo]);

  return (
    <section className="pokemon-page__main-container">
      <div className="main-container__right-side">
        <span className="pokemon__id">#{pokemon?.id}</span>
        <span className="pokemon__name">
          {" "}
          {capitalizeFirstLetter(pokemon?.name)}
        </span>
        <img
          src={pokemon?.sprites?.other["official-artwork"].front_default}
          alt={`Pokemon ${pokemon?.name}`}
          className="pokemon__img"
        />
        <div className="pokemon-card__info__types">
          {pokemon?.types?.map((type: any) => (
            <span key={type?.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="main-container__left-side">
        
        <article className="left-side__description">
          <h3 className="article__title">Description</h3>
          <p>{replaceDescriptionChar(pokemonDescription)}</p>
        </article>

        <article className="left-side__stats">
          <h3 className="article__title">Stats</h3>
          <div className="stats-container">
            <div className="stats-container__item">
              <span className="stats-item__name">Height: </span>
              <span className="stats-item_value">
                {pokemon.height / 10 + " m"}
              </span>
            </div>
            <div className="stats-container__item">
              <span className="stats-item__name">Weight: </span>
              <span className="stats-item_value">
                {pokemon.weight / 10 + " kg"}
              </span>
            </div>
            <>
              {pokemon.stats?.map((stat: any) => {
                return (
                  <div key={stat.stat.name} className="stats-container__item">
                    <span className="stats-item__name">
                      {capitalizeFirstLetter(stat.stat.name) + ": "}
                    </span>
                    <span className="stats-item_value">{stat.base_stat}</span>
                  </div>
                );
              })}
            </>
          </div>
        </article>
      </div>
    </section>
  );
};
