import css from "./NavigationAdditional.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const generateIsActiveClass = ({ isActive }) => {
  return clsx(css.additionalInfoMenu, isActive && css.isActive);
};

const NavigationAdditional = () => {
  return (
    <div className={css.navigationBar}>
      <ul className={css.additionalInfoList}>
        <li className={css.additionalInfoItem}>
          <NavLink className={generateIsActiveClass} to="features">
            Features
          </NavLink>
        </li>
        <li className={css.additionalInfoItem}>
          <NavLink className={generateIsActiveClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationAdditional;
