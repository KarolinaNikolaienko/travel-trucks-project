import { useId } from "react";
import css from "./FilterCard.module.css";
import clsx from "clsx";

const FilterCard = ({ cardName, cardIcon, cardValue }) => {
  const checkboxId = useId();
  return (
    <>
      <input
        type="checkbox"
        className={clsx(css.filterCheckbox, "visually-hidden")}
        name={cardName}
        id={checkboxId}
        value={cardValue}
      />
      <label htmlFor={checkboxId} className={css.filterLabel}>
        <svg className={css.cardIcon} width="32px" height="32px">
          <use href={`../../../src/assets/icons.svg#${cardIcon}`}></use>
        </svg>
        <span className={css.cardName}>{cardName}</span>
      </label>
    </>
  );
};

export default FilterCard;
