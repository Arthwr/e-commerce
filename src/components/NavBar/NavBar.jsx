import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "@assets/svg/main-logo.svg";
import searchIcon from "@assets/svg/search-icon.svg";
import cartIcon from "@assets/svg/cart-icon.svg";
import styles from "./NavBar.module.css";

export default function NavBar({ isAnimating = false }) {
  return (
    <header>
      <nav>
        <div className={styles.left}>
          <div className={`${styles.logo} ${isAnimating ? styles.visible : ""}`}>
            <img src={logo} alt="logo" role="presentation" />
          </div>
          <div className={styles.links}>
            <Link to="/products">Products</Link>
            <Link to="/about">About us</Link>
            <Link to="/sustainability">Sustainability</Link>
          </div>
        </div>
        <div className={styles.right}>
          <button>
            <img src={searchIcon} alt="" role="presentation" />
            <span>Search</span>
          </button>
          <Link to="/cart">
            <img src={cartIcon} alt="" role="presentation" />
            <span>Cart</span>
            <div className={styles.counter}>14</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  isAnimating: PropTypes.bool,
};
