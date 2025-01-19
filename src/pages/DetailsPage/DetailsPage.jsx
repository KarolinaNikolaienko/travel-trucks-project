import css from "./DetailsPage.module.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import clsx from "clsx";
import NavigationAdditional from "../../components/NavigationAdditional/NavigationAdditional";

const DetailsPage = () => {
  return (
    <section className={css.detailsSection}>
      <div className="container">
        DetailsPage
        <NavigationAdditional />
        <hr />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default DetailsPage;
