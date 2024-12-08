import PropTypes from "prop-types";
import styles from "./ProductCounter.module.css";

export default function ProductCounter({ count, onChange }) {
  const incrementCount = () => onChange(count + 1);
  const decrementCount = () => onChange(Math.max(1, count - 1));
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    isNaN(value) ? onChange(1) : onChange(Math.max(1, value));
  };

  return (
    <div className={styles.counter}>
      <button onClick={decrementCount} disabled={count < 1}>
        -
      </button>
      <input type="number" min={1} value={count} onChange={handleInputChange} />
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

ProductCounter.propTypes = {
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
