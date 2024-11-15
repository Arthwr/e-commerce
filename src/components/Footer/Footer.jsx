import { Link } from "react-router-dom";
import DevFooter from "@components/DevFooter/DevFooter.jsx";
import twIcon from "@assets/svg/tw-icon.svg";
import igIcon from "@assets/svg/ig-icon.svg";
import fbIcon from "@assets/svg/fb-icon.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <section className={styles.socials}>
        <nav className={styles.left}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twIcon} alt="" />
            <span>Twitter</span>
          </a>
          <div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={igIcon} alt="" />
              <span>Instagram</span>
            </a>
          </div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} alt="" />
            <span>Facebook</span>
          </a>
        </nav>
        <nav className={styles.right}>
          <Link to="/about">Help Center</Link>
          <Link to="/about">Community</Link>
          <Link to="/about">FAQ</Link>
          <Link to="/about">Contact Us</Link>
        </nav>
      </section>
      <DevFooter />
    </footer>
  );
}
