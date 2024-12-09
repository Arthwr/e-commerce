import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ActionButton.module.css";

export default function ActionButton({ path, label, ariaLabel, onClick }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }

    navigate(path);
  };

  return (
    <div className={styles.default}>
      <button to={path} aria-label={ariaLabel || label} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
}

ActionButton.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
};
