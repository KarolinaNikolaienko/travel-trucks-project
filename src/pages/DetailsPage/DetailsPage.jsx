import css from "./DetailsPage.module.css";
import { Suspense, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { fetchTruckById } from "../../redux/trucksOps";
import NavigationAdditional from "../../components/NavigationAdditional/NavigationAdditional";
import BookingForm from "../../components/BookingForm/BookingForm";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selecttrucks,
} from "../../redux/truckSlice";
import { nanoid } from "nanoid";

const DetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTruckById(params.id));
  }, [dispatch, params]);

  const truck = useSelector(selecttrucks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <section className={css.detailsSection}>
      <div className="container">
        {truck && !isLoading && !error && (
          <>
            <span className={css.truckName}>{truck.name}</span>
            <div className={css.reviewsLocation}>
              <div className={css.reviews}>
                <svg className={css.starIcon} width="16px" height="16px">
                  <use href="../../../src/assets/icons.svg#star-icon"></use>
                </svg>
                <span className={css.reviewsText}>
                  {truck.rating} ({truck ?? truck.reviews.length} reviews)
                </span>
              </div>
              <div className={css.location}>
                <svg className={css.mapIcon} width="16px" height="16px">
                  <use href="../../../src/assets/icons.svg#map-icon"></use>
                </svg>
                <span className={css.locationText}>{truck.location}</span>
              </div>
            </div>
            <span className={css.truckPrice}>&#8364;{truck.price}.00</span>
            <ul className={css.imagesList}>
              {truck &&
                truck.gallery &&
                truck.gallery.length > 0 &&
                truck.gallery.map((image) => (
                  <>
                    <li className={css.imageItem} key={nanoid()}>
                      <img className={css.image} src={image.original} />
                    </li>
                  </>
                ))}
            </ul>
            <p className={css.description}>{truck.description}</p>
            <NavigationAdditional />
            <hr className={css.divider} />
            <div className={css.detailsAdditionalInfo}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
              <div className={css.contactForm}>
                <BookingForm submit={(values) => console.log(values)} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DetailsPage;
