import css from "./Loader.module.css";
import BarLoader from "react-spinners/BarLoader";

const Loader = ({ loading }) => {
  return (
    <div className={css.loaderWrapper}>
      <BarLoader className={css.loader} loading={loading} color="var(--main)" />
    </div>
  );
};

export default Loader;
