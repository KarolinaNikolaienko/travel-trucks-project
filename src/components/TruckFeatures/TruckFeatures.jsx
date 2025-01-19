import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import css from "./TruckFeatures.module.css";
import TruckFeaturesList from "../TruckFeaturesList/TruckFeaturesList";

const TruckFeaturesPage = () => {
  const [catList, setCatList] = useState([]);
  const [charObj, setCharObj] = useState({});

  useEffect(() => {
    setCatList([
      ["Automatic", "diagram-icon"],
      ["Petrol", "fuel-pump-icon"],
      ["AC", "wind-icon"],
      ["Bathroom", "shower-icon"],
      ["Kitchen", "cup-hot-icon"],
      ["TV", "tv-icon"],
      ["Radio", "radio-icon"],
      ["Refrigerator", "fridge-icon"],
      ["Microwave", "microwave-icon"],
      ["Gas", "gas-stove-icon"],
      ["Water", "water-icon"],
    ]);
    setCharObj({
      form: "Panel truck",
      length: "5.4 m",
      width: "2.01 m",
      height: "2.05 m",
      tank: "132 l",
      consumption: "12.4l/100km",
    });
  }, []);
  return (
    <div className={css.truckFeatures}>
      <div className={css.categoriesWrapper}>
        <CategoriesList
          className={css.categoriesList}
          categoriesList={catList}
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
