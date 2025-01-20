import { useSelector } from "react-redux";
import TruckReviewsList from "../TruckReviewsList/TruckReviewsList";
import css from "./TruckReviews.module.css";
import { selecttrucks } from "../../redux/truckSlice";

const TruckReviewsPage = () => {
  const truck = useSelector(selecttrucks);
  return (
    <div className={css.truckReviews}>
      <TruckReviewsList reviewsList={truck.reviews} />
    </div>
  );
};

export default TruckReviewsPage;
