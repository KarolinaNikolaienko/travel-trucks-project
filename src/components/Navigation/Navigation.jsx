import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink, Link } from "react-router-dom";

const generateIsActiveClass = ({ isActive }) => {
  return clsx(css.menu, isActive && css.isActive);
};

const Navigation = () => {
  return (
    <div className={css.navigationBar}>
      <Link to="/">
        <img
          className={css.logo}
          src="src/assets/logo-full-icon.svg"
          alt="logo TravelTruck"
          width="136px"
          height="16px"
        />
      </Link>
      <nav className={css.navigation}>
        <NavLink className={generateIsActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={generateIsActiveClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
