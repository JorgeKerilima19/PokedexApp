import { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

import "../styles/homepage.css";

export const HomePage = () => {
  const { a } = useContext(PokedexContext);
  return (
    <section className="homepage container">
      <div className="homepage__pokemon-container">
        <article className="pokemon-card__small">
          <img src="" alt="No Loaded" />
          <div className="pokemon-card__small-description">
            <h4>Pokemon Name</h4>
            <div className="pokemon-card__small-description__types">
              <span>Type1</span>
              <span>Type2</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
