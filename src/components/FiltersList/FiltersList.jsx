import FilterCard from "../FilterCard/FilterCard";
import css from "./FiltersList.module.css";
import { nanoid } from "nanoid";

const FiltersList = ({ filterTitle, filtersList }) => {
  return (
    <div className={css.filters}>
      <h3 className={css.filterTitle}>{filterTitle}</h3>
      <hr />
      <ul className={css.filtersList}>
        {filtersList.map(({ name, icon, value }) => (
          <li key={nanoid()}>
            <FilterCard cardName={name} cardIcon={icon} cardValue={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersList;
