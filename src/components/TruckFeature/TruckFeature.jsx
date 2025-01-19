import css from "./TruckFeature.module.css";

const TruckFeature = ({ characteristic, value }) => {
  return (
    <>
      <span className={css.characteristic}>{characteristic}</span>
      <span className={css.characteristic}>{value}</span>
    </>
  );
};

export default TruckFeature;
