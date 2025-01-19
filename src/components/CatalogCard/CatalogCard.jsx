import { useNavigate } from "react-router-dom";
import css from "./CatalogCard.module.css";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useEffect, useId, useState } from "react";
import clsx from "clsx";

const CatalogCard = ({ truck }) => {
  const navigate = useNavigate();
  const checkboxId = useId();
  const id = 1;
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    setCatList([
      ["Automatic", "diagram-icon"],
      ["AC", "wind-icon"],
      ["Petrol", "fuel-pump-icon"],
      ["Kitchen", "cup-hot-icon"],
    ]);
  }, []);

  const handleFavClick = () => {};

  return (
    <div className={css.catalogCard}>
      <img
        src="../../../src/assets/heroBackground.jpg"
        className={css.catalogCardImg}
      />
      <div className={css.catalogCardInfo}>
        <div className={css.cardHeader}>
          <h2 className={css.truckName}>
            Truck Name Truck Name Truck Name Truck Name Truck Name Truck Name
            Truck Name
          </h2>
          <div className={css.priceFavIcon}>
            <h2 className={css.truckPrice}>&#8364;8000.00</h2>
            <div className={css.favorite}>
              <input
                type="checkbox"
                className={clsx(css.favCheckbox, "visually-hidden")}
                id={checkboxId}
                onChange={handleFavClick}
              />
              <label htmlFor={checkboxId} className={css.favLabel}>
                <svg className={css.favIcon} width="24px" height="24px">
                  <use href="../../../src/assets/icons.svg#favorite-icon"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className={css.reviewsLocation}>
          <div className={css.reviews}>
            <svg className={css.starIcon} width="16px" height="16px">
              <use href="../../../src/assets/icons.svg#star-icon"></use>
            </svg>
            <span className={css.reviewsText}>4.4 (2 reviews)</span>
          </div>
          <div className={css.location}>
            <svg className={css.mapIcon} width="16px" height="16px">
              <use href="../../../src/assets/icons.svg#map-icon"></use>
            </svg>
            <span className={css.locationText}>Kyiv, Ukraine</span>
          </div>
        </div>
        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>
        <div className={css.categoriesWrapper}>
          <CategoriesList categoriesList={catList} />
        </div>
        <button
          className={css.catalogCardButton}
          onClick={() => navigate(`/catalog/${id}/features`)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
