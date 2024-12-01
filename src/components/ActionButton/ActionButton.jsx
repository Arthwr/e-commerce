import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ActionButton.module.css";

export default function ActionButton({ path, label, ariaLabel }) {
  return (
    <div className={styles.default}>
      <Link  to={path} aria-label={ariaLabel || label}>
        {label}
      </Link>
    </div>
  );
}

ActionButton.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
};
