import { nanoid } from "nanoid";
import css from "./CatalogList.module.css";
import CatalogCard from "../CatalogCard/CatalogCard";
import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selecttrucks,
} from "../../redux/truckSlice";
import Loader from "../Loader/Loader";

const CatalogList = () => {
  const trucks = useSelector(selecttrucks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (trucks && trucks.items) {
    return (
      <>
        {isLoading && <Loader />}
        {error && (
          <div className={css.error}>
            <p>Oops... Something went wrong</p>
            <p className={css.errorMsg}>{error}</p>
          </div>
        )}
        <ul className={css.filtersList}>
          {trucks.items.map((truck) => (
            <li key={nanoid()}>
              <CatalogCard truck={truck} />
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default CatalogList;
