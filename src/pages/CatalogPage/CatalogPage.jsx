import css from "./CatalogPage.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import { fetchTrucks } from "../../redux/trucksOps";
import { useDispatch } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <section className={css.catalogSection}>
      <div className={clsx("container", css.catalogWrapper)}>
        <div className={css.catalogFilters}>
          <Filters />
        </div>
        <div className={css.catalog}>
          <CatalogList />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
