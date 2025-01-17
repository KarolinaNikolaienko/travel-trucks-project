import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const TruckFeatures = lazy(() =>
  import("./components/TruckFeatures/TruckFeatures")
);
const TruckReviews = lazy(() =>
  import("./components/TruckReviews/TruckReviews")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<TruckFeatures />} />
            <Route path="reviews" element={<TruckReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
