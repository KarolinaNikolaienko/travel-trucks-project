import { useNavigate } from "react-router-dom";
import css from "./CatalogCard.module.css";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useId } from "react";
import clsx from "clsx";

const categories = {
  automatic: ["Automatic", "diagram-icon"],
  petrol: ["Petrol", "fuel-pump-icon"],
  AC: ["AC", "wind-icon"],
  bathroom: ["Bathroom", "shower-icon"],
  kitchen: ["Kitchen", "cup-hot-icon"],
  TV: ["TV", "tv-icon"],
  radio: ["Radio", "radio-icon"],
  refrigerator: ["Refrigerator", "fridge-icon"],
  microwave: ["Microwave", "microwave-icon"],
  gas: ["Gas", "gas-stove-icon"],
  water: ["Water", "water-icon"],
};

const CatalogCard = ({ truck }) => {
  console.log(truck);
  const navigate = useNavigate();
  const checkboxId = useId();
  let cats = [];
  if (truck.transmission == "automatic") cats.push(categories.automatic);
  if (truck.transmission == "automatic") cats.push(categories.automatic);
  if (truck.AC) cats.push(categories.AC);
  if (truck.kitchen) cats.push(categories.kitchen);
  if (truck.TV) cats.push(categories.TV);
  if (truck.radio) cats.push(categories.radio);
  if (truck.refrigerator) cats.push(categories.refrigerator);
  if (truck.microwave) cats.push(categories.microwave);
  if (truck.gas) cats.push(categories.gas);
  if (truck.water) cats.push(categories.water);
  if (truck.bathroom) cats.push(categories.bathroom);

  const handleFavClick = () => {};

  return (
    <div className={css.catalogCard}>
      <img
        src="../../../src/assets/heroBackground.jpg"
        className={css.catalogCardImg}
      />
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
            <span className={css.reviewsText}>
              {truck.rating} ({truck.reviews.length} reviews)
            </span>
          </div>
          <div className={css.location}>
            <svg className={css.mapIcon} width="16px" height="16px">
              <use href="../../../src/assets/icons.svg#map-icon"></use>
            </svg>
            <span className={css.locationText}>{truck.location}</span>
          </div>
        </div>
        <p className={css.description}>{truck.description}</p>
        <div className={css.categoriesWrapper}>
          <CategoriesList categoriesList={cats} />
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
