import clsx from "clsx";
import css from "./TruckReview.module.css";
import { nanoid } from "nanoid";
import Icons from "../../assets/icons.svg";

const TruckReview = ({ reviewerName, rating, comment }) => {
  let stars = [];
  const wholePartRating = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i <= wholePartRating - 1)
      stars.push(
        <svg
          key={nanoid()}
          className={clsx(css.star, css.gold)}
          width="16px"
          height="16px"
        >
          <use xlinkHref={`${Icons}#star-icon`}></use>
        </svg>
      );
    else
      stars.push(
        <svg
          key={nanoid()}
          className={clsx(css.star)}
          width="16px"
          height="16px"
        >
          <use xlinkHref={`${Icons}#star-icon`}></use>
        </svg>
      );
  }
  if (rating - wholePartRating !== 0)
    stars[wholePartRating] = (
      <svg
        key={nanoid()}
        className={clsx(css.star, css.goldHalf)}
        width="16px"
        height="16px"
      >
        <use xlinkHref={`${Icons}#star-icon`}></use>
      </svg>
    );
  return (
    <>
      <div className={css.reviewHead}>
        <div className={css.avatar}>{reviewerName[0].toUpperCase()}</div>
        <div className={css.nameRating}>
          <span className={css.reviewerName}>{reviewerName}</span>
          <div className={css.stars}>{stars}</div>
        </div>
      </div>
      <p className={css.reviewComment}>{comment}</p>
    </>
  );
};

export default TruckReview;
