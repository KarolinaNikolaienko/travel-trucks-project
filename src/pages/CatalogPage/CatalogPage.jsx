import { useNavigate } from "react-router-dom";
import css from "./CatalogPage.module.css";
import clsx from "clsx";
import InputField from "../../components/InputField/InputField";
import { useEffect, useId, useState } from "react";
import Filters from "../../components/Filters/Filters";

const CatalogPage = () => {
  const [equipmentFilters, setEquipmentFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const navigate = useNavigate();
  const locationId = useId();

  useEffect(() => {
    setEquipmentFilters([
      { name: "AC", icon: "wind-icon", value: "AC" },
      { name: "Automatic", icon: "diagram-icon", value: "automatic" },
      { name: "Kitchen", icon: "cup-hot-icon", value: "kitchen" },
      { name: "TV", icon: "tv-icon", value: "TV" },
      { name: "Bathroom", icon: "shower-icon", value: "bathroom" },
    ]);
    setTypeFilters([
      { name: "Van", icon: "bi_grid-1x2-icon", value: "panelTruck" },
      {
        name: "Fully Integrated",
        icon: "bi_grid-3x3-gap-icon",
        value: "fullyIntegrated",
      },
      { name: "Alcove", icon: "bi_grid-icon", value: "alcove" },
    ]);
  }, []);

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
          <span className={css.filtersText}>Filters</span>
          <Filters
            filterTitle={"Vehicle equipment"}
            filtersList={equipmentFilters}
          />
          <Filters filterTitle={"Vehicle type"} filtersList={typeFilters} />
        </div>
        <div className={css.catalog}>Catalog</div>
      </div>
    </section>
  );
};

export default CatalogPage;
