import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import css from "./TruckFeatures.module.css";
import TruckFeaturesList from "../TruckFeaturesList/TruckFeaturesList";
import { useSelector } from "react-redux";
import { selecttrucks } from "../../redux/truckSlice";
import generateCategories from "../../additionalFunctions/generateCategories";

const TruckFeaturesPage = () => {
  const truck = useSelector(selecttrucks);
  const [charObj, setCharObj] = useState({});

  useEffect(() => {
    setCharObj({
      form: truck.form,
      length: truck.length,
      width: truck.width,
      height: truck.height,
      tank: truck.tank,
      consumption: truck.consumption,
    });
  }, [truck]);
  return (
    <div className={css.truckFeatures}>
      <div className={css.categoriesWrapper}>
        <CategoriesList
          className={css.categoriesList}
          categoriesList={generateCategories(truck)}
        />
      </div>
      <div className={css.truckDetails}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <hr />
        <TruckFeaturesList truckCharList={charObj} />
      </div>
    </div>
  );
};

export default TruckFeaturesPage;
