import styles from "./DropdownFilter.module.css";
import PropTypes from "prop-types";

export default function DropdownFilter({ onSortChange, currentFilter = "featured" }) {
  const handleSelectedChange = (event) => {
    const value = event.target.value || "featured";
    onSortChange(value);
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter" aria-label="sort by">
        Sort by:
      </label>
      <div className={styles.select}>
        <select
          name="filter"
          id="filter"
          value={currentFilter}
          onChange={handleSelectedChange}
          aria-controls="product-list"
        >
          <option value="featured">Featured</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}

DropdownFilter.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string,
};
