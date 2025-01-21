import { useNavigate } from "react-router-dom";
import css from "./CatalogCard.module.css";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useId } from "react";
import clsx from "clsx";
import generateCategories from "../../additionalFunctions/generateCategories";

const CatalogCard = ({ truck }) => {
  const navigate = useNavigate();
  const checkboxId = useId();

  const handleFavClick = () => {};

  return (
    <div className={css.catalogCard}>
      <img src={truck.gallery[0].original} className={css.catalogCardImg} />
      <div className={css.catalogCardInfo}>
        <div className={css.cardHeader}>
          <h2 className={css.truckName}>{truck.name}</h2>
          <div className={css.priceFavIcon}>
            <h2 className={css.truckPrice}>&#8364;{truck.price}.00</h2>
            <div className={css.favorite}>
              <input
                type="checkbox"
                className={clsx(css.favCheckbox, "visually-hidden")}
                id={checkboxId}
                onChange={handleFavClick}
              />
              <label htmlFor={checkboxId} className={css.favLabel}>
                <svg className={css.favIcon} width="24px" height="24px">
                  <use href="src/assets/icons.svg#favorite-icon"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className={css.reviewsLocation}>
          <div className={css.reviews}>
            <svg className={css.starIcon} width="16px" height="16px">
              <use href="src/assets/icons.svg#star-icon"></use>
            </svg>
            <span className={css.reviewsText}>
              {truck.rating} ({truck.reviews.length} reviews)
            </span>
          </div>
          <div className={css.location}>
            <svg className={css.mapIcon} width="16px" height="16px">
              <use href="src/assets/icons.svg#map-icon"></use>
            </svg>
            <span className={css.locationText}>{truck.location}</span>
          </div>
        </div>
        <p className={css.description}>{truck.description}</p>
        <div className={css.categoriesWrapper}>
          <CategoriesList categoriesList={generateCategories(truck)} />
        </div>
        <button
          className={css.catalogCardButton}
          onClick={() => navigate(`/catalog/${truck.id}/features`)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
