import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ label }) {
  return (
    <>
      <ul className={styles.breadcrumbs}>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>{label}</li>
      </ul>
    </>
  );
}

Breadcrumbs.propTypes = {
  label: PropTypes.string,
};
