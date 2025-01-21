import css from "./Category.module.css";

const Category = ({ categoryName, categoryIcon }) => {
  return (
    <>
      <svg className={css.categoryIcon} width="20px" height="20px">
        <use href={`../../src/assets/icons.svg#${categoryIcon}`}></use>
      </svg>
      <span className={css.categoryName}>{categoryName}</span>
    </>
  );
};

export default Category;
