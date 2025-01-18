import { useNavigate } from "react-router-dom";
import css from "./CatalogPage.module.css";
import clsx from "clsx";
import InputField from "../../components/InputField/InputField";
import { useId } from "react";

const CatalogPage = () => {
  const navigate = useNavigate();
  const locationId = useId();
  return (
    <section className={css.catalogSection}>
      <div className={clsx("container", css.catalogWrapper)}>
        <div className={css.catalogFilters}>
          <label htmlFor={locationId} className={css.locationLabel}>
            <span className={css.locationLabelText}>Location</span>
            <InputField
              placeholder={"Kyiv, Ukraine"}
              id={locationId}
              style={{ paddingLeft: "46px" }}
            >
              <svg className={css.locationIcon} width="20px" height="20px">
                <use href="../../../src/assets/icons.svg#map-icon"></use>
              </svg>
            </InputField>
          </label>
        </div>
        <div className={css.catalog}>Catalog</div>
      </div>
    </section>
  );
};

export default CatalogPage;
