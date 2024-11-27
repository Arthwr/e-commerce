import styles from "./DropdownFilter.module.css";

export default function DropdownFilter() {
  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Sort by:</label>
      <div className={styles.select}>
        <select name="filter" id="filter">
          <option value="featured">Featured</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}
