import css from "./Category.module.css";
import Icons from "../../assets/icons.svg";

const Category = ({ categoryName, categoryIcon }) => {
  return (
    <>
      <svg className={css.categoryIcon} width="20px" height="20px">
        <use xlinkHref={`${Icons}#${categoryIcon}`}></use>
      </svg>
      <span className={css.categoryName}>{categoryName}</span>
    </>
  );
};

export default Category;
