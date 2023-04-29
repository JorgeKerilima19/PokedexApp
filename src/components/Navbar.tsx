import { Outlet, Link } from "react-router-dom";
import { LogoPokedex } from "../helpers/Logos";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <header className="pokedex__navbar">
        <Link to="/search" className="navbar__logo-container">
          <LogoPokedex />
        </Link>
        <form className="navbar__form">
          <input
            type="text"
            className="form__input"
            placeholder="Type something"
          />
          <button className="form__input-button">Search</button>
        </form>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
