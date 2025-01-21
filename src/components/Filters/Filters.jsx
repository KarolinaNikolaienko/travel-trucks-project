import { useEffect, useId, useState } from "react";
import css from "./Filters.module.css";
import InputField from "../InputField/InputField";
import FiltersList from "../FiltersList/FiltersList";

const FiltersForm = () => {
  const [equipmentFilters, setEquipmentFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
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
    <div className={css.filters}>
      <label htmlFor={locationId} className={css.locationLabel}>
        <span className={css.locationLabelText}>Location</span>
        <InputField
          placeholder={"Kyiv, Ukraine"}
          id={locationId}
          style={{ paddingLeft: "46px" }}
        >
          <svg className={css.locationIcon} width="20px" height="20px">
            <use href="src/assets/icons.svg#map-icon"></use>
          </svg>
        </InputField>
      </label>
      <span className={css.filtersText}>Filters</span>
      <FiltersList
        filterTitle={"Vehicle equipment"}
        filtersList={equipmentFilters}
      />
      <FiltersList filterTitle={"Vehicle type"} filtersList={typeFilters} />
      <button className={css.searchButton} type="submit">
        Search
      </button>
    </div>
  );
};

export default FiltersForm;
