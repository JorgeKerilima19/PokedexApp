import { Outlet, Link } from "react-router-dom";
import { LogoPokedex, LogoSearch } from "../helpers/Logos";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <header className="pokedex__navbar">
        <Link to="/search" className="navbar__logo-container">
          <LogoSearch />
        </Link>
        <form className="navbar__form">
          <input type="text" className="form__input" />
          <button className="form__input-button">Search</button>
        </form>
      </header>
      <LogoPokedex />
      <Outlet />
    </>
  );
};
