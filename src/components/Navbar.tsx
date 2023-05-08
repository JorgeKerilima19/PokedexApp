import { Outlet, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogoPokedex } from "../helpers/Logos";
import "../styles/navbar.css";
import { PokedexContext } from "../context/PokedexContext";

export const Navbar = () => {
  const { valueSearch, onInputChange, onResetForm } =
    useContext(PokedexContext);
  const navigate = useNavigate();

  const onSearchSubmit = (e: any) => {
    e.preventDefault();
    navigate("/searchPokemon", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <header className="pokedex__navbar">
        <Link to="/search" className="navbar__logo-container">
          <LogoPokedex />
        </Link>
        <form className="navbar__form" onSubmit={onSearchSubmit}>
          <input
            type="text"
            className="form__input"
            placeholder="Type something"
            id=""
            name="valueSearch"
            value={valueSearch}
            onChange={onInputChange}
          />
          <button className="form__input-button" type="submit">
            Search
          </button>
        </form>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
