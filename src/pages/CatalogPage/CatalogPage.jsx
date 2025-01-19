import { useNavigate } from "react-router-dom";
import css from "./CatalogPage.module.css";
import clsx from "clsx";
import { useEffect, useId, useState } from "react";
import Filters from "../../components/Filters/Filters";
import CatalogCard from "../../components/CatalogCard/CatalogCard";

const CatalogPage = () => {
  const navigate = useNavigate();

  return (
    <section className={css.catalogSection}>
      <div className={clsx("container", css.catalogWrapper)}>
        <div className={css.catalogFilters}>
          <Filters />
        </div>
        <div className={css.catalog}>
          <CatalogCard />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
