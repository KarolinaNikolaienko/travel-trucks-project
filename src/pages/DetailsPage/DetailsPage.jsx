import css from "./DetailsPage.module.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import clsx from "clsx";
import NavigationAdditional from "../../components/NavigationAdditional/NavigationAdditional";
import BookingForm from "../../components/BookingForm/BookingForm";

const DetailsPage = () => {
  return (
    <section className={css.detailsSection}>
      <div className="container">
        <span className={css.truckName}>
          Truck Name Truck Name Truck Name Truck Name Truck Name Truck Name
          Truck Name
        </span>
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
        <span className={css.truckPrice}>&#8364;8000.00</span>
        <ul className={css.imagesList}>
          <li className={css.imageItem}>
            <img
              className={css.image}
              src="../../../src/assets/heroBackground.jpg"
            />
          </li>
          <li className={css.imageItem}>
            <img
              className={css.image}
              src="../../../src/assets/heroBackground.jpg"
            />
          </li>
          <li className={css.imageItem}>
            <img
              className={css.image}
              src="../../../src/assets/heroBackground.jpg"
            />
          </li>
          <li className={css.imageItem}>
            <img
              className={css.image}
              src="../../../src/assets/heroBackground.jpg"
            />
          </li>
          <li className={css.imageItem}>
            <img
              className={css.image}
              src="../../../src/assets/heroBackground.jpg"
            />
          </li>
          <li className={css.imageItem}>
            <img
              className={css.image}
              src="../../../src/assets/heroBackground.jpg"
            />
          </li>
          <li className={css.imageItem}>
            <img
              className={css.image}
              src="../../../src/assets/heroBackground.jpg"
            />
          </li>
        </ul>
        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>
        <NavigationAdditional />
        <hr className={css.divider} />
        <div className={css.detailsAdditionalInfo}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <div className={css.contactForm}>
            <BookingForm submit={(values) => console.log(values)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
