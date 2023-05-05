import { useState, useContext } from "react";
import { ImList2, ImCross } from "react-icons/im";
import { PokedexContext } from "../context/PokedexContext";

const types = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fire",
  "Flying",
  "Fighting",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

export function FilterBar() {
  const [filterOpen, setFilterOpen] = useState(false);

  const { handleCheckbox } = useContext(PokedexContext);

  return (
    <div className="Pokedex-filterBar">
      <div className={`filter ${filterOpen ? "filter-open" : ""}`}>
        {filterOpen ? (
          <ImCross
            className="filter__to-open"
            onClick={() => setFilterOpen(!filterOpen)}
          />
        ) : (
          <ImList2
            className="filter__to-open"
            onClick={() => setFilterOpen(!filterOpen)}
          />
        )}
        <ul className="filter__filter-list">
          {types.map((type: string) => {
            return (
              <li key={type} className="filter-list__item">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name={`${type.toLowerCase()}`}
                  id={`${type}`}
                  className="checkbox"
                />
                <label htmlFor={`${type}`}>{type}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
