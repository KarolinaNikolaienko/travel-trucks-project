import Category from "../Category/Category";
import css from "./CategoriesList.module.css";
import { nanoid } from "nanoid";

const CategoriesList = ({ categoriesList }) => {
  return (
    <>
      <ul className={css.categoriesList}>
        {categoriesList.map(([categoryName, categoryIcon]) => (
          <li className={css.categoryItem} key={nanoid()}>
            <Category categoryName={categoryName} categoryIcon={categoryIcon} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesList;
