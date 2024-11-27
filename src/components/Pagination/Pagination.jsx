import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

export default function Pagination({ pages = 4 }) {
  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        <div>
          {Array.from({ length: pages }).map((_, index) => (
            <button key={index} className={styles.pagebtn}>
              {index + 1}
            </button>
          ))}
        </div>
        <button className={styles.next}>Next</button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
};
