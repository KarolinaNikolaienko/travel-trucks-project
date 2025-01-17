import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className={css.heroSection}>
      <div className="container">
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroDescription}>
          You can find everything you want in our catalog
        </p>
        <button className={css.heroButton} onClick={() => navigate("/catalog")}>
          View Now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
