import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@contexts/CartContext.jsx";
import PropTypes from "prop-types";
import logo from "@assets/svg/main-logo.svg";
import searchIcon from "@assets/svg/search-icon.svg";
import cartIcon from "@assets/svg/cart-icon.svg";
import styles from "./NavBar.module.css";

export default function NavBar({ isAnimating = false, isStatic = false, enableScrollHandler = true }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { cartItems } = useCart();

  useEffect(() => {
    if (!enableScrollHandler) {
      setVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, enableScrollHandler]);

  const cartItemsCount = useMemo(() => {
    return cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  }, [cartItems]);

  return (
    <header className={`${visible ? "" : styles.hidden} ${isStatic ? styles.alt : ""}`}>
      <nav>
        <div className={styles.left}>
          <div className={`${styles.logo} ${isAnimating ? styles.visible : ""}`}>
            <img src={logo} alt="logo" role="presentation" />
          </div>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About us</Link>
          </div>
        </div>
        <div className={styles.right}>
          <button>
            <img src={searchIcon} alt="search icon" role="presentation" />
            <span>Search</span>
          </button>
          <Link to="/cart">
            <img src={cartIcon} alt="" role="presentation" />
            <span>Cart</span>
            <div className={styles.counter}>{cartItemsCount}</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  isAnimating: PropTypes.bool,
  isStatic: PropTypes.bool,
  enableScrollHandler: PropTypes.bool,
};
