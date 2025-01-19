import css from "./TruckCharacteristic.module.css";

const TruckCharacteristic = ({ characteristic, value }) => {
  return (
    <>
      <span className={css.characteristic}>{characteristic}</span>
      <span className={css.characteristic}>{value}</span>
    </>
  );
};

export default TruckCharacteristic;
