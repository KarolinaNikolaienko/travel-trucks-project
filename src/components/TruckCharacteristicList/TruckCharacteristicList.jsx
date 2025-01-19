import { nanoid } from "nanoid";
import TruckCharacteristic from "../TruckCharacteristic/TruckCharacteristic";
import css from "./TruckCharacteristicList.module.css";

const TruckCharacteristicList = ({ truckCharList }) => {
  return (
    <ul className={css.charList}>
      {Object.entries(truckCharList).map(([key, value]) => (
        <li className={css.charItem} key={nanoid()}>
          <TruckCharacteristic characteristic={key} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default TruckCharacteristicList;
