import PropTypes from "prop-types";
import Banner from "@components/Banner/Banner.jsx";
import styles from "./HeroSection.module.css";
import logo from "@assets/svg/main-logo-large.svg";

export default function HeroSection({ isAnimating = false }) {
  return (
    <section className={`${styles.hero} ${isAnimating ? styles.scrolled : ""}`}>
      <div className={`${styles.headline} ${isAnimating ? styles.hidden : ""}`}>
        <h1>Tanoshi</h1>
        <img src={logo} alt="tanoshi leaf logo" />
      </div>
      <Banner />
    </section>
  );
}

HeroSection.propTypes = {
  isAnimating: PropTypes.bool,
};
