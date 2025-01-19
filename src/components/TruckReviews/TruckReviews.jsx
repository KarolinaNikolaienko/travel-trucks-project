import TruckReview from "../TruckReview/TruckReview";
import TruckReviewsList from "../TruckReviewsList/TruckReviewsList";
import css from "./TruckReviews.module.css";

const reviewsList = [
  {
    reviewer_name: "Alice",
    reviewer_rating: 5,
    comment:
      "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!",
  },
  {
    reviewer_name: "Bob",
    reviewer_rating: 4,
    comment:
      "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.",
  },
  {
    reviewer_name: "Alice",
    reviewer_rating: 5,
    comment:
      "The Cruise America C-21 exceeded our expectations! Compact yet spacious, it's perfect for a couple's getaway. The kitchen facilities were impressive, and the bathroom setup was convenient. Highly recommended for a cozy and memorable road trip.",
  },
  {
    reviewer_name: "Bob",
    reviewer_rating: 3,
    comment:
      "Decent motorhome for the price. The Cruise America C-21 provided a comfortable stay, but the lack of a TV and CD player was a downside for entertainment. Overall, a satisfactory experience for a short trip.",
  },
];

const TruckReviewsPage = () => {
  return (
    <div className={css.truckReviews}>
      <TruckReviewsList reviewsList={reviewsList} />
    </div>
  );
};

export default TruckReviewsPage;
