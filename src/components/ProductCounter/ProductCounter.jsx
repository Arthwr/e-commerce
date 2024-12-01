import PropTypes from "prop-types";
import styles from "./ProductCounter.module.css";

export default function ProductCounter({ quantity }) {
  return (
    <div className={styles.counter}>
      <button>-</button>
      <input type="number" min={1} value={quantity || 1} />
      <button>+</button>
    </div>
  );
}

ProductCounter.propTypes = {
  quantity: PropTypes.number,
};
