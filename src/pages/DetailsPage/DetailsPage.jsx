import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

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
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DetailsPage;
