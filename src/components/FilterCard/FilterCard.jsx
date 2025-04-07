import { useId } from "react";
import css from "./FilterCard.module.css";
import Icons from "../../assets/icons.svg";
import clsx from "clsx";

const FilterCard = ({ cardName, cardIcon, cardValue }) => {
  const checkboxId = useId();
  const handleCheckbox = () => {};
  return (
    <>
      <input
        type="checkbox"
        className={clsx(css.filterCheckbox, "visually-hidden")}
        name={cardValue}
        id={checkboxId}
        value={cardValue}
        onChange={handleCheckbox}
      />
      <label htmlFor={checkboxId} className={css.filterLabel}>
        <svg className={css.cardIcon} width="32px" height="32px">
          <use xlinkHref={`${Icons}#${cardIcon}`}></use>
        </svg>
        <span className={css.cardName}>{cardName}</span>
      </label>
    </>
  );
};

export default FilterCard;
