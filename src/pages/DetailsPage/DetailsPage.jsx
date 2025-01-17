import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const DetailsPage = () => {
  return (
    <div>
      DetailsPage
      <ul>
        <li>
          <NavLink to="features">Features</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DetailsPage;
