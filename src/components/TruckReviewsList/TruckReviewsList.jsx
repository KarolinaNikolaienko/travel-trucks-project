import { nanoid } from "nanoid";
import css from "./TruckReviewsList.module.css";
import TruckReview from "../TruckReview/TruckReview";

const TruckReviewsList = ({ reviewsList }) => {
  return (
    <>
      <ul className={css.reviewsList}>
        {reviewsList.map(({ reviewer_name, reviewer_rating, comment }) => (
          <li key={nanoid()}>
            <TruckReview
              reviewerName={reviewer_name}
              rating={reviewer_rating}
              comment={comment}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TruckReviewsList;
