import { nanoid } from "nanoid";
import css from "./CatalogList.module.css";
import CatalogCard from "../CatalogCard/CatalogCard";

const CatalogList = ({ truckList }) => {
  return (
    <>
      <ul className={css.filtersList}>
        {truckList.map((truck) => (
          <li key={nanoid()}>
            <CatalogCard truck={truck} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogList;
