import { nanoid } from "nanoid";
import TruckFeature from "../TruckFeature/TruckFeature";
import css from "./TruckFeaturesList.module.css";

const TruckFeaturesList = ({ truckCharList }) => {
  return (
    <ul className={css.charList}>
      {Object.entries(truckCharList).map(([key, value]) => (
        <li className={css.charItem} key={nanoid()}>
          <TruckFeature characteristic={key} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default TruckFeaturesList;
